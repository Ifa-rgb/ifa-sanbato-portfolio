import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory store for messages and endorsements received by the server
const contactMessages: Array<{
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}> = [];

const dynamicTestimonials: Array<{
  id: string;
  name: string;
  role: string;
  companyOrOrg: string;
  content: string;
  rating: number;
  relationship: string;
  date: string;
}> = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Backend API Endpoints
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'healthy',
      app: 'IFA SANBATO Portfolio & Backend API',
      timestamp: new Date().toISOString(),
      messagesCount: contactMessages.length,
      testimonialsCount: dynamicTestimonials.length,
    });
  });

  // Contact Form Submission Endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are mandatory.',
      });
    }

    const newMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || 'General Inquiry').trim(),
      message: String(message).trim(),
      timestamp: new Date().toISOString(),
    };

    contactMessages.unshift(newMessage);
    console.log(`[Backend Contact API] New message from ${newMessage.name} (${newMessage.email}): "${newMessage.subject}"`);

    res.status(201).json({
      success: true,
      message: 'Message delivered to IFA SANBATO backend service.',
      data: newMessage,
    });
  });

  // Retrieve Contact Messages (for administrative review)
  app.get('/api/contact/messages', (_req, res) => {
    res.json({
      success: true,
      total: contactMessages.length,
      messages: contactMessages,
    });
  });

  // Submit Testimonial / Endorsement Endpoint
  app.post('/api/testimonials', (req, res) => {
    const { name, role, companyOrOrg, content, rating, relationship } = req.body;

    if (!name || !role || !content) {
      return res.status(400).json({
        success: false,
        error: 'Missing required endorsement fields: name, role, and content are required.',
      });
    }

    const newEndorsement = {
      id: `endorse-${Date.now()}`,
      name: String(name).trim(),
      role: String(role).trim(),
      companyOrOrg: String(companyOrOrg || 'Independent').trim(),
      content: String(content).trim(),
      rating: Number(rating) || 5,
      relationship: String(relationship || 'Colleague').trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    dynamicTestimonials.unshift(newEndorsement);
    console.log(`[Backend Endorsements API] New endorsement from ${newEndorsement.name} (${newEndorsement.companyOrOrg})`);

    res.status(201).json({
      success: true,
      message: 'Endorsement recorded successfully.',
      data: newEndorsement,
    });
  });

  // Get All Endorsements
  app.get('/api/testimonials', (_req, res) => {
    res.json({
      success: true,
      testimonials: dynamicTestimonials,
    });
  });

  // Direct Download Endpoint for Complete Project ZIP
  app.get(['/download-zip', '/project.zip', '/ifa-sanbato-portfolio-vscode.zip'], (_req, res) => {
    const zipPath = path.resolve(__dirname, 'ifa-sanbato-portfolio-vscode.zip');
    res.download(zipPath, 'ifa-sanbato-portfolio.zip', (err) => {
      if (err) {
        console.error('Error downloading zip file:', err);
        res.status(500).send('Project ZIP file is being generated, please retry in a few seconds.');
      }
    });
  });

  // In development, hook Vite middleware; in production, serve built static bundle
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Live on http://0.0.0.0:${PORT}`);
  });
}

startServer();

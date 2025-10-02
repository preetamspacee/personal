# BSM Platform Deployment Guide

## Deployment to Render

### Prerequisites
1. GitHub repository with the project code
2. Render account
3. Supabase project (for database)

### Steps

1. **Connect Repository to Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository containing this project

2. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js

3. **Set Environment Variables**
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_APP_URL=https://your-app-name.onrender.com
   NEXTAUTH_URL=https://your-app-name.onrender.com
   NEXTAUTH_SECRET=your_nextauth_secret
   GEMINI_API_KEY=your_gemini_api_key (optional)
   GOOGLE_CLIENT_ID=your_google_client_id (optional)
   GOOGLE_CLIENT_SECRET=your_google_client_secret (optional)
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application
   - The deployment URL will be provided once complete

### Performance Optimizations

The project includes several performance optimizations:

- **GPU Acceleration**: CSS transforms and animations are GPU-accelerated
- **Content Visibility**: Elements use `content-visibility: auto` for better rendering
- **Optimized Animations**: 60-120 FPS animations with reduced complexity
- **Three.js Optimization**: Reduced particle counts and geometry complexity
- **Theme Switching**: Ultra-fast theme transitions (0.05s)
- **Hover Responses**: Quick hover effects (0.05s)

### Monitoring

After deployment, monitor:
- Build logs for any errors
- Runtime logs for performance issues
- Application metrics in Render dashboard

### Troubleshooting

Common issues:
1. **Build Failures**: Check Node.js version compatibility
2. **Environment Variables**: Ensure all required variables are set
3. **Database Connection**: Verify Supabase credentials
4. **Performance**: Monitor memory usage and response times

### Local Development

To run locally:
```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

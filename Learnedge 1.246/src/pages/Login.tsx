import { LogIn, Mail, Lock, EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=3270&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-blue-100/20 mix-blend-overlay"></div>
      
      <div className="w-full max-w-[420px] bg-white/60 backdrop-blur-xl rounded-[28px] p-8 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 relative z-10 transition-all">
        {/* Top Icon */}
        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center shadow-sm border border-white/50 mb-6">
          <LogIn className="w-6 h-6 text-gray-800" strokeWidth={2} />
        </div>

        {/* Text Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in with email</h1>
          <p className="text-sm text-gray-500 font-medium px-4 leading-relaxed">
            Make a new doc to bring your words, data, and teams together. For free
          </p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-11 pr-4 py-3.5 bg-white/50 hover:bg-white/60 focus:bg-white/80 backdrop-blur-sm rounded-xl outline-none border border-white/30 focus:border-white/70 transition-all text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-sm"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-11 pr-11 py-3.5 bg-white/50 hover:bg-white/60 focus:bg-white/80 backdrop-blur-sm rounded-xl outline-none border border-white/30 focus:border-white/70 transition-all text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-sm"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex justify-end">
              <a href="#" className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 bg-[#171717] hover:bg-black text-white rounded-xl text-sm font-medium transition-all shadow-md mt-2 flex items-center justify-center"
          >
            Get Started
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 border-t border-gray-300 border-dotted"></div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Or sign in with</span>
          <div className="flex-1 border-t border-gray-300 border-dotted"></div>
        </div>

        {/* Social Auth */}
        <div className="flex gap-3">
          <button type="button" className="flex-1 bg-white/70 hover:bg-white/90 backdrop-blur-sm py-3.5 rounded-xl border border-white/50 shadow-sm flex items-center justify-center transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          
          <button type="button" className="flex-1 bg-white/70 hover:bg-white/90 backdrop-blur-sm py-3.5 rounded-xl border border-white/50 shadow-sm flex items-center justify-center transition-all">
            <svg className="w-[22px] h-[22px] text-[#24A1DE]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </button>
          
          <button type="button" className="flex-1 bg-white/70 hover:bg-white/90 backdrop-blur-sm py-3.5 rounded-xl border border-white/50 shadow-sm flex items-center justify-center transition-all">
            <svg className="w-5 h-5 text-black" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

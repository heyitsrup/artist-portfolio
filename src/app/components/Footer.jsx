export default function Footer() {
  return (
    <footer className="text-black py-24 bottom-0 w-full border-t-2 border-green-700">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center px-4 space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
        
        <a href="https://www.instagram.com/lava.paints/" target="_blank" rel="noopener noreferrer"
          className="flex items-center space-x-2">
          <img src="/instagram.svg" alt="IG" />
          <span>Instagram</span>
        </a>

        <span className="hidden sm:inline">//</span>

        <a href="https://maps.app.goo.gl/hfgLtMq8r6gi42Y49" className="flex items-center space-x-2">
          <p className="text-2xl">⚲</p>
          <span>51.5072° N, 0.1276° W</span>
        </a>

        <span className="hidden sm:inline">//</span>

        <a href="https://github.com/heyitsrup" className="flex items-center space-x-2">
          <p className="text-2xl">♥</p>
          <span>Made by @heyitsrup</span>
        </a>

      </div>
    </footer>
  );
}
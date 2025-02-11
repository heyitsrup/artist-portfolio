export default function Footer() {
  return (
        <footer className="text-black py-24 bottom-0 w-full border-t-2 border-green-700">
      <div className="container mx-auto flex items-center justify-center px-4">
        <a href="https://www.instagram.com/lava.paints/" target="_blank" rel="noopener noreferrer"
          className="flex items-center space-x-2">
          <img src="/instagram.svg" alt="IG" />
          <span>Instagram</span>
        </a>

        <span>&nbsp;&nbsp;//&nbsp;&nbsp;</span>
        
        <a href="https://maps.app.goo.gl/hfgLtMq8r6gi42Y49" className="flex items-center space-x-2">
          <p className="text-2xl">⚲</p>
          <span>51.5072° N, 0.1276° W</span>
        </a>

        <span>&nbsp;&nbsp;//&nbsp;&nbsp;</span>

        <a href="https://github.com/heyitsrup" className="flex items-center space-x-2">
          <p className="text-2xl">♥</p>
          <span>Made by @heyitsrup</span>
        </a>

      </div>
    </footer>
  )
}
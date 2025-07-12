import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-black dark:text-black flex items-center justify-center px-4 py-12">
      <main className="bg-white dark:bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 sm:p-12 space-y-12">
        
        {/* Profile Picture */}
        <div className="flex justify-center">
          <Image
  src="/Yusuf.PNG"
  alt="Yusuf Syed"
  width={1000}
  height={400}
  className="w-full h-64 object-cover rounded-t-2xl"
  priority
/>

        </div>

        {/* Intro Section */}
        <header>
          <h1 className="text-5xl font-bold mb-4 tracking-tight text-center sm:text-left">Yusuf Syed</h1>
          <p className="text-xl text-gray-600 text-center sm:text-left">
            Engineering student. Builder. Researcher.
          </p>
        </header>

        {/* About Me Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm a high school student at Morris Hills in New Jersey with a passion for mechanical engineering,
            hands-on builds, and research. Outside the classroom, I wrestle competitively, teach Tae Kwon Do, and
            lead my school's CyberPatriot team in national cybersecurity competitions.
            I’m always looking for ways to merge technical curiosity with real-world impact.
          </p>
        </section>

        {/* Research Project Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Edge Device AI Testing</h2>
          <p className="text-lg text-gray-700 mb-6">
  During my research internship with Professor <a href="https://www.clarkson.edu/people/faraz-hussain" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Faraz Hussain</a> at Clarkson University,
  I investigated how various edge devices like Raspberry Pi, Jetson Nano, and Intel NUC perform
  under AI model workloads. I developed a comprehensive benchmarking suite to measure
  inference speed, memory usage, and thermal behavior across multiple devices using TensorFlow and PyTorch.
</p>

          <a
            href="https://github.com/Yusuf-Syed39/Edge-Device-AI-Testing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-black px-5 py-2 rounded hover:opacity-90 transition"
          >
            View GitHub Repository →
          </a>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Yusuf Syed ·{" "}
          <a
            href="https://github.com/Yusuf-Syed39"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}

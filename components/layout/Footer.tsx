export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-2 text-center border-t border-[#f3f3f3]/30 text-white">
      <p className="text-sm">
        All rights reserved{" "}
        <a
          href="https://www.linkedin.com/in/aabdullah-ayyman/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#26a77d] "
        >
          Abdullah Ayman
        </a>{" "}
        © {currentYear}
      </p>
    </footer>
  );
}

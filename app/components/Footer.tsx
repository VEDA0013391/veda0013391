export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="md:col-span-4 text-center mt-8 pb-4">
      <p className="text-neutral-600 text-xs font-medium">
        &copy; {year} ryo_001339 All Rights Reserved.
      </p>
    </footer>
  );
}
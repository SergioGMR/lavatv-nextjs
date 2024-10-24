import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ title }: { title?: string }) {
  return (
    <Html lang="es">
      <Head title={`LavaTV - ${title ?? 'Index'}`} />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

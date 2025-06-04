export default function Contact() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 space-y-6">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <form
        action="https://formspree.io/f/{tu-id}" /* remplaza por tu endpoint */
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows="5"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2"
        />
        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
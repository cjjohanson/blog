export default function PullQuote({ children }) {
    return (
      <blockquote className="text-2xl border-l-4 border-teal-400 pl-4 italic text-zinc-700 dark:text-zinc-300 my-8">
        “{children}”
      </blockquote>
    )
  }
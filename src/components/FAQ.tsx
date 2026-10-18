interface FAQProps {
  items: ReadonlyArray<readonly [question: string, answer: string]>;
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="faq">
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>
            {question}
            <span>+</span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

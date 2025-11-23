import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-sm prose-slate max-w-none break-words dark:prose-invert">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({node, ...props}) => (
            <div className="overflow-x-auto my-4 border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
          th: ({node, ...props}) => <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-bold border-b" {...props} />,
          td: ({node, ...props}) => <td className="px-3 py-2 whitespace-normal text-sm text-gray-700 border-r border-b last:border-r-0" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-bold text-green-800 mt-4 mb-2 border-b pb-1" {...props} />,
          h4: ({node, ...props}) => <h4 className="text-md font-semibold text-green-700 mt-3 mb-1" {...props} />,
          p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-slate-800" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
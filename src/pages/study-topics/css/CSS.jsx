import { useState } from 'react';
import parse from 'html-react-parser';
import TopicsNavigation from '../../../components/layout/TopicsNavigation';
import CodeDisplay from '../../../components/CodeDisplay';
import CodeTerminal from '../../../components/CodeTerminal';
import { CSS_TABS, CSS_UI_TEXT, CSS_CONTENT } from '../../../constants/CssTabConstant';

const CSS = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalCode, setTerminalCode] = useState('');

  const handleTryCode = (code) => {
    setTerminalCode(code);
    setTerminalOpen(true);
  };

  const tabs = CSS_TABS;

  const renderTabContent = () => {
    const content = CSS_CONTENT[activeTab] || CSS_CONTENT.default;
    return (
      <section className="space-y-6">
        {content.map((item) => (
          <div key={item.id} className={`bg-${item.color}-50 p-6 rounded-lg`}>
            <h4 className={`font-semibold text-${item.color}-800 mb-3 text-lg`}>{item.title}</h4>
            <div className={`text-${item.color}-700 text-sm mb-3`}>
              {parse(item.description)}
            </div>
            {item.code && (
              <CodeDisplay
                code={item.code}
                language="css"
                onTryCode={() => handleTryCode(item.code)}
              />
            )}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{CSS_UI_TEXT.title}</h1>
        <p className="mt-2 text-gray-600">{CSS_UI_TEXT.description}</p>
      </div>

      {/* Tab Navigation */}
      {tabs && <div className="mb-6">
        <nav className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>}

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>

      <TopicsNavigation />

      {/* Code Terminal */}
      <CodeTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        initialCode={terminalCode}
        title="CSS Code Terminal"
        language="css"
      />
    </div>
  );
};

export default CSS;

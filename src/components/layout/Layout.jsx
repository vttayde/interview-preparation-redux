import { Outlet } from 'react-router-dom';
import Header from './Header';
import FloatingTerminalIcon from '../FloatingTerminalIcon';
import GlobalTerminalDialog from '../GlobalTerminalDialog';
import { useGlobalTerminal } from '../../hooks/useGlobalTerminal';

const Layout = () => {
  const {
    isTerminalOpen,
    terminalCode,
    output,
    setTerminalCode,
    runCode,
    openTerminal,
    closeTerminal,
    clearTerminal
  } = useGlobalTerminal();

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <Outlet context={{ openTerminal }} />
        </div>
      </main>
      
      {/* Floating Terminal Icon */}
      <FloatingTerminalIcon onOpenTerminal={openTerminal} />
      
      {/* Global Terminal Dialog */}
      <GlobalTerminalDialog
        isOpen={isTerminalOpen}
        onClose={closeTerminal}
        code={terminalCode}
        onCodeChange={setTerminalCode}
        onRunCode={runCode}
        onClearCode={clearTerminal}
        output={output}
      />
    </div>
  );
};

export default Layout;

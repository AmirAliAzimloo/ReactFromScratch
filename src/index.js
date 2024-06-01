import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            Hello World!
        </div>
    );
}

const container = document.createElement('div');
const root = ReactDOM.createRoot(container);
root.render(<App/>);

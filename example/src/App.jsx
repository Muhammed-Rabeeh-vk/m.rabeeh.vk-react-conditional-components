import React,{useState,useEffect} from 'react';
import {If,Switch,Case,Default} from '@m.rabeeh.vk/react-conditional-components';
import "./App.css";
function App() {
  const isLoggedin = true; // Example condition
  const [fruits, setFruits] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setFruits(["apple", "banana", "cherry"]);
    }, 1000);
  }, []);
  return (
    <div className="app-container">
      <section className="demo-section">
        <h1>Example: Switch with Case and Default</h1>
        <Switch value={isLoggedin}>
          <Case when={true}>Welcome back!</Case>
          <Case when={false}>Please log in.</Case>
          <Default>Default case content.</Default>
        </Switch>
      </section>

      <section className="demo-section">
        <h1>Example: If with then & else</h1>
        <If
          condition={isLoggedin}
          then={<h3>Welcome back!</h3>}
          else={<h3>Please log in.</h3>}
        />
      </section>

      <section className="demo-section">
        <h1>Example: If with render & else</h1>
        <If
          condition={isLoggedin}
          render={() => <h3>Welcome back!</h3>}
          else={<h3>Please log in.</h3>}
        />
      </section>

      <section className="demo-section">
        <h1>Example: If with fallback</h1>
        <If
          condition={fruits}
          fallback={<h3>Loading...</h3>}
          else={<h3>No fruits available</h3>}
        >
          {fruits ? (
           <div>
      <If condition={fruits} fallback={<p>Loading fruits...</p>}>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </If>
    </div>
          ) : (
            <h3>No fruits available</h3>
          )}
        </If>
      </section>

      <section className="demo-section">
        <h1>Example: Simple usage</h1>
        <If condition={isLoggedin}>
          <h3>Welcome back!</h3>
        </If>
        <If condition={!isLoggedin}>
          <h3>Please log in.</h3>
        </If>
      </section>

      <section className="demo-section code-section">
        <h2>Code Example</h2>
        <pre className="code-snippet language-jsx">
          <code>{` 
         import React,{useState,useEffect} from 'react';
import {If,Switch,Case,Default} from '@m.rabeeh.vk/react-conditional-components';
import "./App.css";
function App() {
  const isLoggedin = true; // Example condition
  const [fruits, setFruits] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setFruits(["apple", "banana", "cherry"]);
    }, 1000);
  }, []);
  return (
    <div className="app-container">
      <section className="demo-section">
        <h1>Example: Switch with Case and Default</h1>
        <Switch value={isLoggedin}>
          <Case when={true}>Welcome back!</Case>
          <Case when={false}>Please log in.</Case>
          <Default>Default case content.</Default>
        </Switch>
      </section>

      <section className="demo-section">
        <h1>Example: If with then & else</h1>
        <If
          condition={isLoggedin}
          then={<h3>Welcome back!</h3>}
          else={<h3>Please log in.</h3>}
        />
      </section>

      <section className="demo-section">
        <h1>Example: If with render & else</h1>
        <If
          condition={isLoggedin}
          render={() => <h3>Welcome back!</h3>}
          else={<h3>Please log in.</h3>}
        />
      </section>

      <section className="demo-section">
        <h1>Example: If with fallback</h1>
        <If
          condition={fruits}
          fallback={<h3>Loading...</h3>}
          else={<h3>No fruits available</h3>}
        >
          {fruits ? (
           <div>
      <If condition={fruits} fallback={<p>Loading fruits...</p>}>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </If>
    </div>
          ) : (
            <h3>No fruits available</h3>
          )}
        </If>
      </section>

      <section className="demo-section">
        <h1>Example: Simple usage</h1>
        <If condition={isLoggedin}>
          <h3>Welcome back!</h3>
        </If>
        <If condition={!isLoggedin}>
          <h3>Please log in.</h3>
        </If>
      </section>

    </div>
  );
}


export default App`
        }</code>
        </pre>
      </section>
    </div>
  );
}


export default App

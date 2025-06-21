import { useState } from "react";

export default function Tabs(){
    const [activeTab, setActiveTab] = useState('Home');

    const tabContent = {
      'Home' : <HomeTab/>,
      'Profile' : <ProfileTab/>,
      'Contact' : <ContactTab/>  

    };

    return (
        <div>
            <div>
                {Object.keys(tabContent).map((tab) => (
                    <TabComponent key={tab} label={tab} onClick={setActiveTab} isActive={tab===activeTab}/>
                ))
                }
            </div>
            <div style={{marginTop: '20px'}}>
                {tabContent[activeTab]}
            </div>
        </div>
    );
}

function TabComponent({label,onClick,isActive}){
    return (
        <>
            <button onClick={()=>onClick(label)} style={{
                padding: '10px',
                marginRight: '8px',
                backgroundColor: isActive ? '#ddd' : '#f9f9f9',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}>
                {label}
            </button>
        </>
    )
}

function HomeTab(){
    return (
    <div>
      <h1>Welcome Home</h1>
      <p>This is your dashboard.</p>
      <ul>
        <li>Recent activity</li>
        <li>Quick links</li>
      </ul>
    </div>
  );
}

function ProfileTab(){
   return (
    <div>
      <h1>Your Profile</h1>
      <p>Edit your details and settings.</p>
    </div>
  );
}


function ContactTab(){
   return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name: <input type="text" /></label>
        <br />
        <label>Message: <textarea /></label>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
}
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import context from '../../context/context'

const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
        </div>

      <div className="main-container">

          {!showResult
          ?<>
          <div className="greet">
          <p><span>Hello, Nitya!</span></p>
          <p>How can I help you today?</p>
        </div>
        
          </>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }

            </div>
          </div>        
        }

        
        <div className="main-bottom">
          <div className="search-box">

            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main

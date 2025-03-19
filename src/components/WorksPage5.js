import React from 'react'

const WorksPage5 = () => {
  return (
    <main>
            <div id="wrapper">
                <div id="w-area">
                    <div class="sub-title">
                        <h2>Works</h2>
                        <p>制作実績</p>
                    </div>
                    <div class="w-works-box">
                        <figure><img src={process.env.PUBLIC_URL + "/img/p-works05.png"} alt="" /></figure>
                        <div class="works-txt-box">
                            <div class="w-tit">
                                <h3>Website</h3>
                                <p>JAカードキャンペーンLP </p>
                            </div>
                            <div class="w-content">
                                <p>coding</p>
                                <p>
                                    PC版とスマホ版のコーディングを担当。<br />
                                    スケジュールが厳しかったため、納期を優先しつつも、デザイナーとの打ち合わせを欠かさず進めて丁寧に調整しました。
                                </p>
                            </div>
                            <div class="w-btn">
                                <a href="https://www.jacard-tokuten.jp/" target="_blank">
                                    <p>Visit Site</p>
                                    <figure>
                                        <svg width="47" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.5 1L45.5 6.5L37.5 12"/>
                                            <path d="M45.5 6.5L0 6.5"/>
                                        </svg>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </main>
  )
}

export default WorksPage5
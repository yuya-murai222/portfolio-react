import React from 'react'

const WorksPage2 = () => {
  return (
    <main>
            <div id="wrapper">
                <div id="w-area">
                    <div class="sub-title">
                        <h2>Works</h2>
                        <p>制作実績</p>
                    </div>
                    <div class="w-works-box">
                        <figure><img src="./img/p-works02.png" alt="" /></figure>
                        <div class="works-txt-box">
                            <div class="w-tit">
                                <h3>Website</h3>
                                <p>株式会社スタンダード</p>
                            </div>
                            <div class="w-content">
                                <p>design/coding/wordpress</p>
                                <p>
                                    もともとPC版のデザインは存在していましたが、スマホ版のデザインとコーディングを担当しました。<br />
                                    デザイナーの意図をできるだけ再現できるように意識して制作しました。
                                </p>
                            </div>
                            <div class="w-btn">
                                <a href="http://standard-inc.co.jp/" target="_blank">
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

export default WorksPage2
import React, {useEffect, useState} from "react";
import { db } from "./firebase-config";
import { HashLink } from 'react-router-hash-link';
import {
    collection,
    addDoc,
} from "firebase/firestore";
import Form from "./form";

function LandingEnglish(props) {
    const [openForm, setOpenForm] = useState(false);
    const [newName, setNewName] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [users, setUsers] = useState(false);

    const usersCollectionRef = collection(db, "userData");
    const createUser = async (event) => {
        event.preventDefault()
        console.log(newEmail, newTitle, newName)
        await addDoc(usersCollectionRef, { email: newEmail, name: newName, title:newTitle});
        setUsers(true)
        setOpenForm(false)
    };

    const openEnglish = () => {
        setOpenForm(true)
    }
    return (
        <>
            {openForm ? <Form
                createUser={createUser}
                setNewTitle={setNewTitle}
                setNewName={setNewName}
                artistPlaceHolder={"Artist"}
                titlePlaceHolder={"Title"}
                users={users}
                    />
                :
                <main className="main-div">
                <section id="header-sec">
          <div class="language-flag">
              <a onClick={props.changeToFrench} href="#">
                  <img src="assets/images/frenchLogo.png" height="20px" class="heading-desktop" alt=""/>
                  <img src="assets/images/frenchLogo.png" height="10px" class="heading-mobile" alt=""/>
              </a>
          </div>
          <div class="container-fluid">
            
              <div class="row">
                  <div class="col-lg-7 col-8">
                      <div class="top-header">
                          <img alt="" src="assets/images/logo.png"/>
                          <h1>live a unique experience <span>wITH YOUR FAVORITE ARTIST</span></h1>
                          <p>Be part of the curator community by sharing your
                              favorite song and get the opportunity to be displayed in our playlist.
                          </p>
                          <p>
                              Follow us on our social media to enjoy our daily curation
                          </p>
                          <ul>
                              <li><a href="https://www.instagram.com/curationmusic_io/" target="_blank"><img alt=""
                                                                                                             src="assets/images/white-instagram.png"/></a></li>
                              <li><a href="https://twitter.com/curation_music" target="_blank"><img alt=""
                                                                                                    src="assets/images/white-twitter.png"/></a></li>
                              <li><a href="https://open.spotify.com/playlist/0XhMerRi06aHN6ReYZSTqU?si=KTpTXLXWTbSaMEjeUBkHsQ" target="_blank"><img alt="" src="assets/images/spotify.png"/></a></li>
                          </ul>

                      </div>
                  </div>
                  
              </div>

          </div>
          <div class="col-lg-12 col-md-12 col-12">
                      <div class="header-pic">
                          <img alt="" src="assets/images/slider-banner.png" class="slider-circle"/>
                          <img alt="" src="assets/images/lady-pic.png" class="lady-pic"/>
                      </div>
                  </div>
      </section>
                <section id="project">
                    <div className="container">
                        <h3>The Project</h3>
                        <div className="row">
                            <div className=" col-md-4">
                                <div className="project-inner">
                                    <span><img alt="" src="assets/images/project01.png"/></span>
                                    <h2>Digital Collectible</h2>
                                    <p>Artists <strong>share</strong> the creation that he wants under NFT format. </p>
                                </div>
                            </div>

                            <div className=" col-md-4">
                                <div className="project-inner" id="project-inner02">
                                    <span><img alt="" src="assets/images/project02.png"/></span>
                                    <h2> Fans own property<br/>of the asset</h2>
                                    <p>Fans own <strong>100 % of the digital collectible</strong> (Music/Picture/Clip/Animation...)</p>
                                </div>
                            </div>

                            <div className=" col-md-4">
                                <div className="project-inner">
                                    <span><img alt="" src="assets/images/project03.png"/></span>
                                    <h2>Fans live an experience <br/>with his favorite artist
                                    </h2>
                                    <p>Thanks to the digital collectible, fans get the right to live a crazy experience with <strong>the favorite artist</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    <HashLink to="#song">
                        <section id="mision">
                            <div className="container">
                                <div className="row">
                                    <h2 className="heading-desktop">Mission</h2>
                                    <h2 className="heading-mobile">Our Mission</h2>
                                    <p>Curation will help artists to cope with 3 issues they face</p>
                                    <ul>
                                        <li><h6>99% of artists <strong>don’t</strong><span>make money with</span>streaming</h6>
                                            <img alt="" src="assets/images/mission-icon01.png"/>
                                        </li>
                                        <li><h6>Big labels <span><strong>get rich</strong> off the artist</span></h6>
                                            <img alt="" src="assets/images/mission-icon03.png"/>
                                        </li>
                                        <li><h6><strong>Web 3</strong> musical<span>projects are centralized</span></h6>
                                            <img alt="" src="assets/images/mission-icon02.png"/></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </HashLink>
                <section id="experience">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="experience-inner">
                                    <h2>THE EXPERIENCE</h2>
                                    <p>LIVE A UNIQUE EXPERIENCE</p>

                                    <div className="experience-list">
                                        <ul>
                                            <li>Private show in unique places</li>
                                            <li>Own shares of a song</li>
                                            <li>Get a life ticket for shows</li>
                                            <li>Collectors clothes</li>
                                            <li>Events in the metaverse</li>
                                            <span className="heading-desktop"><li>Etc.</li></span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="experience-pic">
                                    <img alt="" src="assets/images/pic01.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="song">
                    <div className="container">
                        <div className="row">
                            <h4>And the possibilities are endless, feel free to share your ideas with us.</h4>
                            <div className="sec-04">
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <p ><strong>Enter your email and share your favorite song.</strong> If the song is good, it will be
                                            displayed in our <strong>Curation playlist</strong> and you will get a shoutout
                                            in <strong>instagram.</strong></p>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <div className="sign-fld">
                                            <form onSubmit={openEnglish}>
                                                <div className="form-group">
                                                    <input type="email" name="" onChange={(e) => {setNewEmail(e.target.value)} }  placeholder="Enter your mail"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="submit" value="Share your song" id="sbmt-btn"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="center-circle">
                    <div className="container">
                        <div className="row">
                            <div className="center-circle">
                                <p>To have a chance to be displayed <span>in our playlist Curation Music,</span> enter you mail and
                                    share with<span> us your favorite song </span>
                                </p>
                                <h5>The artist:</h5>
                            </div>

                            <div className="circle01">
                                <img alt="" src="assets/images/instagram.png"/>
                                <p>Has between <span>0 and 100 k followers in</span> Instagram</p>
                            </div>
                            <div className="circle02">
                                <img alt="" src="assets/images/global.png"/>
                                <p>Didn’t sign with a big label like <span>Universal/Sony</span></p>
                            </div>
                            <div className="circle03">
                                <img alt="" src="assets/images/music.png"/>
                                <p>Make good music</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="join-community">
                            <h2>Join our community !</h2>
                            <form onSubmit={openEnglish}>
                                <div className="form-group">
                                    <input type="text"  placeholder="Enter your full name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" onChange={(e)=>{setNewEmail(e.target.value)}} placeholder="Enter your e-mail address"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-7">
                                <div className="footer-logo">
                                    <img alt="" src="assets/images/logo.png"/>
                                    <p>Curation Music is a music NFT platform where fan community own the creation of their favorite
                                        artist in order to live a unique experience with him.</p>
                                </div>
                            </div>
                            <div className="col-md-7 col-5">
                                <div className="fooer-links">
                                    <ul className="footer-links-inner">
                                        {/*<li><a href="javascript:;">FAQS</a></li>*/}
                                        {/*<li><a href="javascript:;">Contact Us</a></li>*/}
                                    </ul>

                                    <ul className="footer-links-inner02">
                                        <li><h5>Follow Us/Contact Us</h5></li>
                                        <li><a href="https://www.instagram.com/curationmusic_io/" target="_blank"><img alt=""
                                                                                                                       src="assets/images/white-instagram.png"/></a></li>
                                        <li><a href="https://twitter.com/curation_music" target="_blank"><img alt="" src="assets/images/white-twitter.png"/></a></li>
                                        <li><a href="https://open.spotify.com/playlist/0XhMerRi06aHN6ReYZSTqU?si=KTpTXLXWTbSaMEjeUBkHsQ" target="_blank"><img alt="" src="assets/images/spotify.png"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>}

        </>
    );
}

export default LandingEnglish;

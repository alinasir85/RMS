import React, {FC, useEffect, useRef, useState} from 'react';
import logoImage from '../../../../../public/assets/i2c_logo.svg';
import check from '../../../../../public/assets/check.svg';
import loginWidget from '../../../../../public/assets/RMS-Login-widgets.png';
import { I2cButton, I2cSwitch, I2cInput} from '@webcomponents/i2cwebcomponents/dist/react';
import axios from "../../configs/custom-axios";
import { useTranslation } from 'react-i18next';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {setLoggedIn} from "../../../../redux/actions/authActions";
import {useRouter} from "next/router";
import Image from "next/image";

interface LoginProps {}


const Login: FC<LoginProps> = (props) => {

    const username = useRef<HTMLInputElement>();
    const password = useRef<HTMLInputElement>();
    const router = useRouter();
    const { t, i18n } = useTranslation("login");
    const [authFailed, setAuthFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cookie] = useCookies(['isLoggedIn']);
    const [instanceCookie] = useCookies(['instance']);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(cookie.isLoggedIn && cookie.isLoggedIn === "Y"){
            router.push('/dashboard');
        }
        if(typeof window != undefined) {
            const domainName=window.location.hostname;
            axios.post('/config/fetchInstance', domainName)
                .then(resp=> {}).catch(err => {
                console.log(err);
            });
        }
    },[])

    const submitHandler =(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setIsLoading(true);
        const user = {
            "username" : username?.current?.value,
            "password" : password?.current?.value
        }
        axios.post("/auth/login", user)
            .then(resp=> {
                sessionStorage.setItem("roleId", resp.data[0].authority);
                dispatch(setLoggedIn(true));
                router.push('/agent-dashboard');
            }).catch(err => {
            setAuthFailed(true);
            setIsLoading(false);
        });
    }

    return (
        <>
            <div>

                <div id="wrapper">
                    <div className="main-left">
                        <div className="left-content">
                            <div className="left-content-wrapper">
                                <div className="left-main-img" id="client_login">
                                    <div className="left-main-content">
                                        <Image width="550" src={loginWidget}  alt={"loginWidget"}/>
                                        <h1><strong>{t('rms.login.banner.heading')}</strong></h1>
                                        <p>{t('rms.login.banner.desc')}<span>{t('rms.login.banner.desc2')}</span></p>
                                        <ul className="report_listing">
                                            <li>
                                                <Image src={check}  alt={"check"}/>
                                                <span>{t('rms.login.banner.tracking.attendance')}</span>
                                            </li>
                                            <li>
                                                <Image src={check}  alt={"check"}/>
                                                <span>{t('rms.login.banner.schedule.time')}</span>
                                            </li>
                                            <li>
                                                <Image src={check}  alt={"check"}/>
                                                <span>{t('rms.login.banner.dispute.creation')}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="left-main-bottom">
                                <p> {t('rms.login.banner.copyright')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="left-main-content mobile-content">
                            <h1>{t('rms.login.banner.mobile.welcome')}<strong>{t('rms.login.banner.mobile.welcome2')}</strong></h1>
                        </div>
                        <div className="right-content">
                            <header id="header">
                                <div className="logo">
                                    <a href="src/modules/Common/components/Login/Login#" aria-label="header_logo" title="i2c Inc.">
                                        <Image src={logoImage}  alt={"logoImage"}/>
                                    </a>
                                    <span className="logo_text">{t('rms.login.heading')}</span>
                                </div>
                            </header>
                            <div id="Log" className="content-wrapper">
                                <h2>{t('rms.login.form.heading')}</h2>
                                <p>{t('rms.login.form.desc')}</p>
                                    {
                                        authFailed?(<div className={"alert alert-danger w-100"}>Invalid Credentials</div>):null
                                    }
                                <div className="login-form">
                                    <form className="Login-form" autoComplete={"on"} onSubmit={(event)=>submitHandler(event)}>
                                        <div className="form-group">
                                            <I2cInput ref={username}
                                                      lineStyled name="userid" id="userid" label={t('rms.login.form.userid')} type="email" autocomplete={"on"} placeholder='johndoe@i2cinc.com' required></I2cInput>
                                        </div>
                                        <div className="form-group password_group">
                                            <I2cInput ref={password}
                                                      lineStyled id="password" name="password" label={t('rms.login.form.password')} type="password" placeholder="●●●●●●●●" size="medium" toggle-password required></I2cInput>
                                        </div>
                                        <div className="form-group submit_group">
                                            <I2cSwitch className="login-switch">{t('rms.login.form.remember')}?</I2cSwitch>
                                            {
                                                isLoading?(
                                                    <I2cButton className="pull-right" variant="primary"  type="button" disabled>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        <span className="sr-only">  {t('rms.login.form.button.signin')}</span>
                                                    </I2cButton>
                                                ):(<I2cButton className="pull-right" variant="primary"  type="submit" disabled={false}>{t('rms.login.form.button.signin')}</I2cButton>)
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-res">
                            <ul className="report_listing mobile-content">
                                <li>
                                    <Image src={check}  alt={"check"}/>
                                    <span>{t('rms.login.banner.mobile.report.issue')}</span>
                                </li>
                                <li>
                                    <Image src={check}  alt={"check"}/>
                                    <span>{t('rms.login.banner.mobile.special.request')}</span>
                                </li>
                                <li>
                                    <Image src={check}  alt={"check"}/>
                                    <span>{t('rms.login.banner.mobile.open.ticket.status')}</span>
                                </li>
                            </ul>
                            <div className="left-main-bottom mobile-content">
                                <p><strong>{t('rms.login.banner.mobile.disclaimer')}</strong> {t('rms.login.banner.mobile.disclaimer2')}</p>
                                <p>{t('rms.login.banner.mobile.disclaimer3')}
                                    <a href="src/modules/Common/components/Login/Login" className="privacy_link" target="_blank">{t('rms.login.banner.mobile.disclaimer4')}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
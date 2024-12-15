import React from "react";

import styles from "./Footer.module.css";

import LoactionIcon from "@/components/Svgs/LocationIcon/LocationIcon";
import Phone2Icon from "@/components/Svgs/Phone2Icon/Phone2Icon";
import PhoneIcon from "@/components/Svgs/phoneIcon/PhoneIcon";
import EmailIcon from "@/components/Svgs/EmailIcon/EmailIcon";
import FacebookIcon from "@/components/Svgs/FacebookIcon/FacebookIcon";
import InstagramIcon from "@/components/Svgs/InstagramIcon/InstagramIcon";
import SocialIcon from "@/components/Svgs/SocialIcon/SocialIcon";
import XIcon from "@/components/Svgs/XIcon/XIcon";
import LinkedinIcon from "@/components/Svgs/LinkedinIcon/LinkedinIcon";
import TiktokIcon from "@/components/Svgs/TiktokIcon/TiktokIcon";
import YoutubeIcon from "@/components/Svgs/YoutubeIcon/YoutubeIcon";
import YoutubeBackground from "@/components/Svgs/YoutubeBackground/YoutubeBackground";
import DiscordIcon from "@/components/Svgs/DiscordIcon/DiscordIcon";
import Logo2 from "@/components/Svgs/Logo2/Logo2";
import CopyRightIcon from "@/components/Svgs/CopyRightIcon/CopyRightIcon";

import Card from "@/components/Card/Card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import KisspngEducationIcon from "@/components/Svgs/KisspndEducationIcon/KisspngEducationIcon";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["data-row"]}>
        <div>
          <div className={styles["links-row"]}>
            <div className={styles["link-column"]}>
              <div className={styles["title-links"]}>
                <h3>معلومات</h3>
                <hr className={styles["line-links"]} />
              </div>
              <div className={styles["links"]}>
                <Link href="#" className={styles["link"]}>
                  المساعدة و الدعم
                </Link>
                <Link href="/" className={styles["link"]}>
                  حول الأكاديمية
                </Link>
                <Link href="/" className={styles["link"]}>
                  رسالة الاكاديمية
                </Link>
              </div>
            </div>
            <div className={styles["link-column"]}>
              <div className={styles["title-links"]}>
                <h3>السياسات</h3>
                <hr className={styles["line-links"]} />
              </div>
              <div className={styles["links"]}>
                <Link href="/" className={styles["link"]}>
                  سياسة الاستخدام
                </Link>
                <Link href="/" className={styles["link"]}>
                  سياسة الخصوصية
                </Link>
                <Link href="/" className={styles["link"]}>
                  إخلاء مسؤولية
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["btn-wrapper"]}>
            <Button className={styles["btn-education"]}>
              <KisspngEducationIcon className={styles["education-icon"]} />
              المسارات التعليمية
            </Button>
          </div>
        </div>

        <div className={styles["social-media"]}>
          <div className={styles["card"]}>
            <div className={styles["title"]}>
              <h5>التواصل</h5>
              <hr className={styles["line-contact"]} />
            </div>
            <div className={styles["contact-data"]}>
              <div className={styles["contact-row"]}>
                <LoactionIcon />
                {/* <Image src={location} alt="" width={20} height={30} /> */}
                <p className="">المقر الرئيسي :بريطانيا , لندن</p>
              </div>
              <div className={styles["contact-row"]}>
                <Phone2Icon />
                {/* <Image src={phone} alt="" width={20} height={30} /> */}
                <p className="">+447918713367</p>
              </div>
              <div className={styles["contact-row"]}>
                <EmailIcon />
                {/* <Image src={email} alt="" width={20} height={30} /> */}
                <h5 className="">info@arabcodeacademy.com</h5>
              </div>
            </div>
            <Button className={styles["btn-call"]}>
              <PhoneIcon />
              تواصل معنا
            </Button>
          </div>
          <div className={styles["card"]}>
            <div className={styles["title"]}>
              <h5>مواقع التواصل الاجتماعي</h5>
              <hr className={styles["line-social"]} />
            </div>
            <div className={styles["social-icons"]}>
              <FacebookIcon className={styles["icon"]} />
              <InstagramIcon className={styles["icon"]} />
              <XIcon className={styles["icon"]} />
              <LinkedinIcon />
              <TiktokIcon />
              <div className={styles["icon-container"]}>
                <YoutubeBackground />
                <YoutubeIcon className={styles["youtube-icon"]} />
              </div>
              <SocialIcon />
              <DiscordIcon />
            </div>
            <p className={styles["parag-join"]}>
              انضم الآن إلى مجتمع المبرمجين في الأكاديمية وابدأ رحلتك نحو احتراف
              البرمجة!
            </p>
          </div>
        </div>
      </div>

      <div className={styles["resources"]}>
        <div className={styles["title"]}>
          <h3 style={{ fontSize: "30px" }}>المصادر</h3>
          <hr className={styles["line-resources"]} />
        </div>

        <div className={styles["resources-container"]}>
          <p className={styles["item-resource"]}>المدونة</p>
          <p className={styles["item-resource"]}>المنتدى</p>
          <p className={styles["item-resource"]}>قاموس الكلمات</p>
          <p className={styles["item-resource"]}>دروس فيديو قصيرة</p>
          <p className={styles["item-resource"]}>دليل ادوات الذكاء الاصطناعي</p>
          <p className={styles["item-resource"]}>بنك الاسئلة التقنية</p>
          <p className={styles["item-resource"]}>دروس وانماط الميدجورني</p>
          <p className={styles["item-resource"]}>لغة الضاد</p>
        </div>
      </div>

      <hr className={styles["line-divider"]} />

      <div className={styles["copyright"]}>
        <Logo2 className={styles["copyright-logo"]} />
        <p className={styles["copyright-text"]}>
          جميع الحقوق محفوظة 2023
          <CopyRightIcon />
          الأكاديمية العربية للبرمجة
        </p>
      </div>
    </footer>
  );
};

export default Footer;

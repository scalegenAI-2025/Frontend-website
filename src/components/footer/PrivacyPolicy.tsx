import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "2rem",
  },
  container: {
    maxWidth: "1000px",
    background: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
    color: "#222",
  },
  section: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#333",
  },
  content: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: 1.6,
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#444",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
});

const PrivacyPolicy: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <article className={classes.container}>
        <h1 className={classes.header}>Privacy Policy</h1>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Introduction</h2>
          <p className={classes.content}>
            This Privacy Policy (the &quot;Policy&quot;) governs the manner in
            which the Platform collects, uses, maintains and discloses
            information of its users. The Policy also describes the practices
            that We apply to such user information, user&#39;s privacy rights
            and choices regarding their information. To clarify, this Policy
            applies to all users of the Platform (referred to as
            &quot;Learners&quot;, &quot;You&quot;, &quot;Your&quot;). By
            accessing and using the Platform, providing Your Personal
            Information, or by otherwise signalling Your agreement when the
            option is presented to You, You consent to the collection, use, and
            disclosure of information described in this Policy and Terms of Use
            and we disclaim all the liabilities arising therefrom. If You do not
            agree with any provisions of this Policy and/or the Terms of Use,
            You should not access or use the Platform or engage in
            communications with us and are required to leave the Platform
            immediately. If any information You have provided or uploaded on the
            Platform violates the terms of this Policy or Terms of Use, we may
            be required to delete such information upon informing You of the
            same and revoke Your access if required without incurring any
            liability to You. Capitalized terms used but not defined in this
            Privacy Policy can be found in our General Terms. Please read this
            Policy carefully prior to accessing our Platform and using any of
            the services or products offered therein. If you have any questions,
            please contact us at info@scalinggenai.com
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Personal Information</h2>
          <p className={classes.content}>
            &quot;Personal Information&quot; shall mean the information which
            identifies a Learner i.e., first and last name, identification
            number, email address, age, gender, location, photograph and/or
            phone number provided at the time of registration or any time
            thereafter on the Platform. &quot;Sensitive Personal
            Information&quot; shall include (i) passwords and financial data
            (except the truncated last four digits of credit/debit card), (ii)
            health data, (iii) official identifier (such as biometric data,
            social security number, driver&#39;s license, passport, etc.), (iv)
            information about sexual life, sexual identifier, race, ethnicity,
            political or religious belief or affiliation, (v) account details
            and passwords, or (vi) other data/information categorized as
            &#39;sensitive personal data&#39; or &#39;special categories of
            data&#39; under the Information Technology (Reasonable Security
            Practices and Procedures and Sensitive Personal Data or Information)
            Rules, 2011, General Data Protection Regulation (GDPR) and / or the
            California Consumer Privacy Act (CCPA) (&quot;Data Protection
            Laws&quot;) and in context of this Policy or other equivalent /
            similar legislations. Usage of the term &#39;Personal
            Information&#39; shall include &#39;Sensitive Personal
            Information&#39; as may be applicable to the context of its usage.
          </p>
        </section>

        {/* Added UL Section */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>INFORMATION WE COLLECT</h2>
          <p className={classes.content}>
            We may collect both personal and non-personal identifiable
            information from You in a variety of ways, including, but not
            limited to, when You visit our Platform, register on the Platform,
            and in connection with other activities, services, features or
            resources we make available on our Platform. However, please note
            that-
          </p>
          <ul className={classes.list}>
            <li>
              We do not ask You for Personal Information unless we truly need
              it; like when You are registering for any Content on the Platform.
            </li>
            <li>
              We do not share Your Personal Information with anyone except to
              comply with the applicable laws, develop our products and
              services, or protect our rights.
            </li>
            <li>
              We do not store Personal Information on our servers unless
              required for the on-going operation of our Platform.
            </li>
          </ul>
          <p className={classes.content}>
            Personal Identifiable Information: We may collect
            personal-identifiable information such as Your name and emails
            address to enable Your access to the Platform and services/products
            offered therein. We will collect personal-identifiable information
            from You only if such information is voluntarily submitted by You to
            us. You can always refuse to provide such personal identification
            information; however, it may prevent You from accessing services or
            products provided on the Platform or from engaging in certain
            activities on the Platform.
          </p>
          <p className={classes.content}>
            Non-Personal Identifiable Information: When You interact with our
            Platform, we may collect non-personal-identifiable information such
            as the browser name, language preference, referring site, and the
            date and time of each user request, operating system and the
            Internet service providers utilized and other similar information.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>
            HOW WE USE and SHARE THE INFORMATION COLLECTED
          </h2>
          <p className={classes.content}>
            We may collect and use Your Personal Information for the following
            purposes:
          </p>
          <p className={classes.content}>
            a. To provide access to our Platform and/or the services/products
            offered therein: We use the Your information as collected by us to
            allow You to access the Platform and the services/products offered
            therein, including without limitation to provide customer service,
            fulfil purchases through the Platform, verify User information and
            to resolve any glitches with our Platform. The legal basis for this
            processing is consent or, where applicable, our legitimate interests
            in the proper administration of our Platform, and/or the performance
            of a contract between You and us.
          </p>
          <p className={classes.content}>
            b. To improve our Platform and maintain safety: We use Your
            information to improve and customize the Platform and
            services/products offered by us. Further, we also use Your
            information to prevent, detect, investigate, and take measures
            against criminal activity, fraud, misuse of or damage to our
            Platform or network, and other threats and violations to a third
            party&#39;s or our rights and property, or the safety of our Users,
            or others. The legal basis for this processing is consent or, where
            applicable, our legitimate interests in the proper administration of
            our Platform, and/or the performance of a contract between You and
            us.
          </p>
          <p className={classes.content}>
            c. To communicate with You or market our services/products: We may
            use the email address submitted by You to communicate with You about
            Your orders on our Platform, our offers, new products, services or
            even receive Your feedback on the Platform or any services/products
            offered therein. It may also be used to respond to Your inquiries,
            questions, and/or other requests. If at any time You would like to
            unsubscribe from receiving future emails, please write to us at the
            contact information provided below. The legal basis for this
            processing is consent or, where applicable, our legitimate interests
            in the proper administration of our Platform, and/or the performance
            of a contract between You and us.
          </p>
          <p className={classes.content}>
            We do not use Personal Information for making any automated
            decisions affecting or creating profiles other than what is
            described in this Policy.
          </p>
          <p className={classes.content}>
            We do not sell, trade, or otherwise exploit Your
            personal-identifiable information to others. Limited to the purposes
            stated hereinabove, we may share generic aggregated demographic
            information not linked to any personal-identifiable information
            regarding visitors and Users with our business partners and trusted
            affiliates.
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>YOUR RIGHTS</h2>
          <p className={classes.content}>
            In general, all Learners have the rights specified herein this
            section. However, depending on where you are situated, you may have
            certain specific rights in respect of your Personal Information
            accorded by the laws of the country you are situated in. To
            understand Your rights, please refer to the Country Specific
            Additional Rights below.
          </p>
          <p className={classes.content}>
            If you are a Learner, you may exercise any of these rights by using
            the options provided to you within the Platform upon your login. If
            however, you are facing any issues or require any clarifications,
            you can always write to us at the address noted in the
            &#39;Grievances&#39; section below, and we will address your
            concerns to the extent required by the applicable law.
          </p>
          <p className={classes.content}>
            a. Right to Confirmation and Access: You have the right to get
            confirmation and access to your Personal Information that is with us
            along with other supporting information.
          </p>
          <p className={classes.content}>
            b. Right to Correction: You have the right to ask us to rectify your
            Personal Information that is with us that you think is inaccurate.
            You also have the right to ask us to update your Personal
            Information that you think is incomplete or out-of-date
          </p>
          <p className={classes.content}>
            c. Right to be Forgotten: You have the right to restrict or prevent
            the continuing disclosure of your Personal Information under certain
            circumstances.
          </p>
          <p className={classes.content}>
            d. Right to Erasure: If you wish to withdraw/remove your Personal
            Information from our Platform, you have the right to request erasure
            of your Personal Information from our Platform. However, please note
            that such erasure will remove all your Personal Information from our
            Platform (except as specifically stated in this Policy) and may
            result in deletion of your account on the Platform permanently, and
            the same will not be retrievable.
          </p>
          <p className={classes.content}>
            Remember, you are entitled to exercise your rights as stated above
            only with respect to your information, including Personal
            Information, and not that of other Learners. Further, when we
            receive any requests or queries over email to the address specified
            in the &#39;Grievances&#39; section below, then, as per the
            applicable Data Protection Laws, we may need to ask you a few
            additional information to verify your identity in association with
            the Platform and the request received.
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>
            PROTECTION OF YOUR INFORMATION
          </h2>
          <p className={classes.content}>
            We take all measures reasonably necessary to protect against the
            unauthorized access, use, alteration or destruction of Personal
            Information or such other data on the Platform. Our disclosure of
            any such information is limited to-
          </p>
          <p className={classes.content}>
            a, our employees, contractors and affiliated organizations (if any)
            that (i) need to know that information in order to process it on our
            behalf or to provide services available on our Platform, and (ii)
            that have agreed not to disclose it to others.
          </p>
          <p className={classes.content}>
            b. a response to a court order, or other governmental request.
            Without imitation to the foregoing, we reserve the right to disclose
            such information where we believe in good faith that such disclosure
            is necessary to comply with applicable laws, regulations, court
            orders, government and law enforcement agencies requests, protect
            and defend a third party&#39;s or our rights and property, or the
            safety of our users, our employees, or others or prevent, detect,
            investigate and take measures against criminal activity, fraud and
            misuse or unauthorized use of our Platform and/or to enforce our
            Terms of Use or other agreements or policies.
          </p>
          <p className={classes.content}>
            To the extent permitted by law, we will attempt to give You prior
            notice before disclosing Your information in response to such a
            request.
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>THIRD PARTY WEBSITES</h2>
          <p className={classes.content}>
            You may find links to the websites and services of our partners,
            suppliers, advertisers, sponsors, licensors and other third parties.
            The content or links that appear on these sites are not controlled
            by us in any manner and we are not responsible for the practices
            employed by such websites. Further, these websites/links thereto,
            including their content, may be constantly changing and the may have
            their own terms of use and privacy policies. Browsing and
            interaction on any other website, including websites which have a
            link to our Site, is subject to that terms and policies published on
            such websites.
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>CROSS BORDER DATA TRANSFER</h2>
          <p className={classes.content}>
            Your information including any Personal Information is stored,
            processed, and transferred in and to the Amazon Web Service (AWS)
            servers and databases located in India. We may also store, process,
            and transfer information in and to servers in other countries
            depending on the location of our affiliates and service providers.
            Please note that these countries may have differing (and potentially
            less stringent) privacy laws and that Personal Information can
            become subject to the laws and disclosure requirements of such
            countries, including disclosure to governmental bodies, regulatory
            agencies, and private persons, as a result of applicable
            governmental or regulatory inquiry, court order or other similar
            process. If you use our Platform from outside India, including in
            the USA, EU, EEA, and UK, your information may be transferred to,
            stored, and processed in India. By accessing our Platform or
            otherwise giving us information, you consent to the transfer of
            information to India and other countries outside your country of
            residence.
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>
            DURATION FOR WHICH YOUR INFORMATION IS STORED
          </h2>
          <p className={classes.content}>
            We will retain Your information for as long as it is required for us
            to retain for the purposes stated hereinabove, including for the
            purpose of complying with legal obligation or business compliances.
            Further, please note that we may not be able to delete all
            communications or photos, files, or other documents publicly made
            available by you on the Platform (for example: comments, feedback,
            etc.), however, we shall anonymize your Personal Information in such
            a way that you can no longer be identified as an individual in
            association with such information made available by you on the
            Platform. We will never disclose aggregated or de-identified
            information in a manner that could identify you as an individual.
            Note: If you wish to exercise any of your rights (as specified in
            &#39;Your Rights&#39; section below) to access, modify and delete
            any or all information stored about you, then you may do so by using
            the options provided within the Platform. You can always write to us
            at info@scalinggenai.com
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>
            MODIFICATION TO PRIVACY POLICY
          </h2>
          <p className={classes.content}>
            We may modify, revise or change our Policy from time to time; when
            we do, we will revise the &#39;updated date&#39; at the beginning of
            this page. We encourage You to check our Platform frequently to see
            the recent changes. Unless stated otherwise, our current Policy
            applies to all information that we have about You.
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Grievances</h2>
          <p className={classes.content}>
            If you have any questions about this Policy or concerns about
            privacy or grievances, please write to us at:{" "}
            <strong>info@scalinggenai.com</strong>
          </p>
        </section>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Grievances</h2>
          <p className={classes.content}>
            If you have any questions about this Policy or concerns about
            privacy or grievances, please write to us at:{" "}
            <strong>info@scalinggenai.com</strong>
          </p>
        </section>
      </article>
    </main>
  );
};

export default PrivacyPolicy;

-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql105.infinityfree.com
-- Generation Time: Dec 21, 2023 at 01:42 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_34839850_grid`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `date` varchar(1024) NOT NULL,
  `name` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `date`, `name`) VALUES
(1, 'Dec-2021', 'Huawei Certified HCIA-5G'),
(2, 'Sep-2021', 'FTTX Overview'),
(3, '2020', 'Huawei Certified HCNA Routing & Switching'),
(4, '2020', 'Altium Designer Software for PCBs (self-learning)'),
(5, '2020', 'Simulink Software for verification'),
(6, 'Jul 2019', 'CST software for RF Designing and simulation'),
(7, 'June-2019', 'IOT with esp node board'),
(8, 'feb-mar 2019', 'CCNA (self-learning)'),
(9, 'sep2018-march2019', 'Java programming language'),
(10, 'sep-2018', 'Microwave Transmission Course '),
(11, 'June-Aug2018', 'Mobile Networks(2G,3G,4G)'),
(12, 'June-2017', 'Basics of Embedded Systems'),
(13, 'Jul-sep 2015', 'C ++ programming language '),
(14, '2016', 'Arduino');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `date` varchar(1024) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `description` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `date`, `title`, `description`) VALUES
(1, '2015-2020', 'B.Sc. in Engineering of Communication and Electronics', 'From Al-Shorouk Academy with Grade Very Good with Honor.');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `date` varchar(1024) NOT NULL,
  `job` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `date`, `job`) VALUES
(1, 'March 2022 - Present', 'Huawei Joined'),
(2, 'Jan2022-Novemebr 2022', 'Maintenance Engineer at Infinity Distributor');

-- --------------------------------------------------------

--
-- Table structure for table `experience_description`
--

CREATE TABLE `experience_description` (
  `id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `title` varchar(1024) DEFAULT NULL,
  `description` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `experience_description`
--

INSERT INTO `experience_description` (`id`, `job_id`, `title`, `description`) VALUES
(1, 1, 'Nov 2022- Present (Microwave TX TE)', 'Supporting Level A Operator in Democratic Republic of Congo [Kinshasa] as following:\r\nDelivered More than 302 New Sites using latest Huawei ODU Products.\r\nDelivered LH Project 10+0 using newest RFU-non SD 5D.\r\nManaged to Cutover and Swap till moment 70 MW Link to resolve the Congestion.\r\nSkilled and Familiar with Iriver1, Iriver2, WDT, ISDP, MBB and NCE. Transferring the Knowledge for the Local guys and leading them to leverage their skills.\r\nTroubleshooting and following up with SBCs on ground to install according to the HEDx libraries and R&D Guidance.'),
(2, 1, '26th July till Novemebr 2022 (Wireless TE)', 'Onsite Project (Telecom Egypt):\r\nWorked with the integration team on integrating new sites, Adding L2600 Band for existing sites Swapping BBU3900 with BBU5900 and replacing RRUs And Antennas with AAUs to provide 64T64R, Installing License and Troubleshooting the Alarms And supporting the SBCs Team onsite to install efficiently, Checking VSWR, Doing RET. etc. Programmed one RET Tool with Python.'),
(3, 1, 'From 13th April till 25th July', 'Microwave principles such as frequency bands, fading types, OptiX RTN Hardware Products, Relay Station types, AM, AMAC, AM Booster and RSL. RTN main features such as LAG, ELAG, PLA, EPLA, EPLA+, Super EPLA, XPIC, SDB, CA, and MIMO. Protection types such as HSB, FD and SD. Microwave Link Design using iRiver2.'),
(4, 1, 'From 27th march till 12th April', '(GSM Network Architecture, UMTS Network Architecture, LTE Network Architecture, OFDM Principles, Multiple Access and Duplex Technologies, LTE Frame Structure, LTE Physical Channels, eNodeB Product Overview, BBU introduction, RFU, RRU and RET, AAU. Auxiliary Devices, eNodeB LTE Typical Configuration, BTS3900, BTS5900, DBS, APM30, Site Solution, VSWR, RTWP, HDEX for Documentations, LMT by MML for configuration)'),
(5, 1, 'From 6th march till 24th March', '(Network Basics, TCPIP Model, IP Subnetting, Network Device, Management, L2 Switching Principles, Route Reachability between VLANs, LACP, RIP and OSPF,HDEX, eNSP)'),
(6, 2, '', 'Worked in the field OF UPS for Schneider and APC Products as Technical Service Provider And Maintenance Engineer for Easy UPS from 750VA UPS,3KVA,6KVA,10KVA,15KVA Skilled with Various types of Batteries and load Calculation, Performing Onsite Surveys And Customer Support (on-site & Remote). Managed to Deploy Three Phase 3M 120KVA for well Known Hospital to cover The Surgery Operation Room in addition to the Intensive Care Room. Managed to Deploy the most First use in Middle East and Africa Parallel Kit Solution for Two 6KVA Easy UPSs for Alsharkia for Sugar Manufacturing in Ismailia.');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `name` varchar(1024) NOT NULL,
  `value` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `name`, `value`) VALUES
(1, 'website_title', 'Abdelkhalek'),
(2, 'job_title', 'A Telecommunication Engineer'),
(3, 'name', 'Mohamed Sayed'),
(4, 'bio', 'I like to troubleshoot and get resolutions to technical challenges'),
(5, 'aim', 'Aiming To Develop My Skills and Get a Challenging Positions.'),
(6, 'education_sum', 'B.Sc. in Engineering of Communication and Electronics with Grade Very Good with Honor'),
(7, 'specialization', 'MW TX Huawei, RAN Integrator Huawei, UPS Schneider, HCNA(R&S), HCIA-5G, GSM, UMTS, LTE and FTTX .'),
(8, 'experience_years', '05'),
(9, 'cert_numbers', '+10'),
(10, 'last_name', 'Abdelkhalek'),
(11, 'about', 'I graduated with degree very good with honor 80.59 % from Communication and Electronics Engineering, Highly innovative and passionate about telecommunication industry.\r\n\r\nI like to troubleshoot and get resolutions to technical challenges, I’m seeking a challenging career as a telecom Engineer that provides an opportunity to put by abilities and learning skills to best use and make my effective contribution to an organization for bright and rewarding career.'),
(12, 'mail', 'm.sayed1217@gmail.com'),
(13, 'phone', '+201128330707'),
(14, 'location', 'InShams, Cairo, Egypt.'),
(15, 'linkedin', 'https://www.linkedin.com/in/mohamed-sayed-sayed-abdelkhalek-68b538137/'),
(16, 'facebook', 'https://www.facebook.com/bnice1217'),
(17, 'insta', 'https://www.instagram.com/mohameda4shraf/'),
(18, 'whatsapp_link', 'https://api.whatsapp.com/send/?phone=201128330707'),
(19, 'img', 'assets/imgs/profile3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`id`, `name`, `description`) VALUES
(1, 'English', 'Very Good command of English'),
(2, 'Arabic', 'Mother Tongue'),
(3, 'Italian', 'Basic Knowledge');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience_description`
--
ALTER TABLE `experience_description`
  ADD PRIMARY KEY (`id`),
  ADD KEY `experience_description` (`job_id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experience_description`
--
ALTER TABLE `experience_description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `experience_description`
--
ALTER TABLE `experience_description`
  ADD CONSTRAINT `experience_description` FOREIGN KEY (`job_id`) REFERENCES `experience` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

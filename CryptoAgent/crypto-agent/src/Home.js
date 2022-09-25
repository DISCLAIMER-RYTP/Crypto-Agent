import React from 'react';
import Header from './Header';
import Instruct from './Instruct';
import './Home.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Backdrop } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <div className="App">
      <Header/>
      <Instruct/>
      <div className='dv1'>
         <p className='txt'>Its size created from trainig skills.But you can use site for your own purposes<br/>
        | Observe | Analizing | Trading | - its motto this site and maybe everyone traders in the World.<br/>
        Dont stay behind everybody. Time to big brain, time to clear your wallet)</p>
      </div>
        <div className='img1'>
          <div className='for-img1'>
          <h1 data-aos="flip-up" className='hh1'>
          Fascinating Cryptocurrency Statistics
          </h1>

      <div className='dv-acord'>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className='acrd'>A post on Bitcoin surfaces on social media every three seconds.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          A recent cryptocurrency stat revealed that there are 28,866 social media posts on Bitcoin posted online daily. 
          If we do the math, then about 1,203 posts are made every hour. That is about 20 posts per minute!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className='acrd'>Bitcoin’s price has grown by 66% in February 2021.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          In January 2021, the digital asset’s rate was just $30 000. By February, it went up by about $20 000, according to cryptocurrency stats. 
          Even more impressive, it was only worth $10 000 a year ago. That makes a 400% increase in value by Q1 of 2021!
          Hodlrs must be super excited since they can now sell their coins at a profit. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel3a-content" id="panel3a-header">
          <Typography className='acrd'>Tether was the biggest cryptocurrency as of February 22nd, with a $109 billion 24-hour volume.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Tether has recently been growing in popularity. 
          It hasn’t always been smooth sailing for the virtual asset, however. Big names like New York’s Attorney General were once its number one critic. 
          He argued that the USD dollar didn't 100% back the coin, therefore it might not be as stable as it claims. 
          Tether did not deny the claims and revealed that the dollar’s endorsement was 74%. It has, 
          however, proven its worth over the years and currently serves various markets. 
          While Bitcoin clocked in about $56 billion during the last week of February 2021, Tether did almost double that - $108.77 billion. 
          According to cryptocurrency statistics for 2021, Tether and Bitcoin took the first and second position, respectively. Ethereum took the third spot with $24.51 billion. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel4a-content" id="panel4a-header">
          <Typography className='acrd'>Ethereum got about 1 million daily transactions in 2020.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Ethereum, Bitcoin’s top competitor, had the highest amount of transactions per day during Q4 of 2020.
          Bitcoin transactions per day show that it only got around 330K - almost four times lower than Ethereum. 
          As of February 2021, Etherium was still at the top with 1.2 million transactions. Bitcoin managed to do at least 272K.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel5a-content" id="panel5a-header">
          <Typography className='acrd'>There was 667 million new crypto-malware by March 2020.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          These internet thugs never miss a chance to steal, huh!
          As of January 2020, they had unleashed over 600 million sneaky crypto-malware. According to cryptocurrency security statistics, 
          that number had increased by around 16 million by March the same year. 
          This is among the most dangerous threats because it can mine for crypto in the background without arousing any suspicion in a process known as cryptojacking. 
          Go for solutions with behavioral intelligence to block any attempts for installation. For threats that are already in the system, 
          AI-driven counter intrusion tools will work best.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel6a-content" id="panel6a-header">
          <Typography className='acrd'>The first ten cryptocurrencies with the highest market cap make up about 88% of the total cryptocurrency market value.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          This includes Bitcoin, Ethereum, Ripple, Tether, Bitcoin Cash, Bitcoin SV, Litecoin, Binance Coin, EOS, and Tezos. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel7a-content" id="panel7a-header">
          <Typography className='acrd'>Cryptocurrency exchanges around the globe exceeded 300 as of 2020.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Crypto exchanges serve as middlemen between cryptocurrency buyers and sellers. 
          Their services support fiat-for-cryptocurrency and crypto-to-crypto transactions. According to cryptocurrency facts, they were 300+ in 2020. 
          So, which are the big players in this niche?
          According to Statista, Binance was the winner with $28.85 /24-hour volume as of February 2021. 
          The second position went to HBTC with $14.44 billion, while Hydax Exchange took the third position with $12.19 billion. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel8a-content" id="panel8a-header">
          <Typography className='acrd'>The Number of Bitcoin Automated Teller Machines (ATMs) as of January 2021 was 14,915.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          As of the first month of 2021, the number of complex and basic crypto ATMs was around 14,000. In February, there were 915 new machines. 
          Genesis Coin is the largest manufacturer of the devices with 34.6%, while the second-biggest is General Bytes, with 30% of the market share.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel9a-content" id="panel9a-header">
          <Typography className='acrd'>The confidence for cryptocurrency as of January 2021 is almost 100%.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Institutional and retail interest in Etherium and Bitcoin by investors dramatically rose in Q4 of 2020. 
          In a 2021 survey of over 60,000 users worldwide, 97% of them confessed their faith in digital assets. 
          According to cryptocurrency statistics, over half of the respondents consider venturing into it as a source of income.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel10a-content" id="panel10a-header">
          <Typography className='acrd'>There are about 900 new coins in the market every day as of 2021.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Every 10 minutes, the number of bitcoins in the market increases. Miners are always excavating new blocks. 
          The average per day is 144, and each throws 6.25 coins into circulation. That makes 900 cryptos daily. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel11a-content" id="panel11a-header">
          <Typography className='acrd'>As of February 25th, 2021, one Ether is worth $1500.87.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          As you may know, crypto prices are always going up and down. 
          According to crypto stats, as of February 25th, the cost of Ether rose by $18.99 on a single day. 
          Compared to January data on the same date, Ether’s value has improved by $131.78.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel12a-content" id="panel12a-header">
          <Typography className='acrd'>As of January 2021, there are 18.6 million Bitcoins in existence.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          According to crypto stats, miners have managed to unearth over 18 million coins as of 2021. The figure is slightly higher than that of 2020 - about 300K.
          Here’ something that miners can look forward to: 
          As of 2021, there are about 361,018 Bitcoins in repositories waiting for the luckiest miners. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel13a-content" id="panel13a-header">
          <Typography className='acrd'>The US dollar will back the Libra coin on a ratio of 1:1 in 2021.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          According to cryptocurrency facts, Libra, Facebook’s virtual money, will launch a single coin in 2021. 
          The company has already built a blockchain to support it in terms of security and verifiability. 
          The organization’s initial plan was to peg the currency to fiat. Due to various regulatory hurdles, the US dollar will support it by 50%.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel14a-content" id="panel14a-header">
          <Typography className='acrd'>The first Bitcoin real-life purchase was for two pizzas, and it cost 10,000 BTC.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          According to cryptocurrency usage statistics, this happened on May 22, 2010, between two Bitcoin forum members. 
          Judging by the current price, this amount of Bitcoin is equivalent to over 90 million USD.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel15a-content" id="panel15a-header">
          <Typography className='acrd'>Bitcoin alone accounts for $6 billion of daily online transactions.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          It is surpassed only by two of America’s top payment networks - Visa Card ($30.3 billion) and MasterCard ($16.2 billion).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel16a-content" id="panel16a-header">
          <Typography className='acrd'>There were 5,098 alternative cryptocurrencies in existence aside from Bitcoin as of 2020.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Bitcoin paved the way for cryptocurrency, with thousands of others flooding the marketplace. 
          Cryptos like Ethereum have their unique blockchain. Others, like Libra, exploit Bitcoin’s flaws, 
          such as low transaction numbers per second. As of 2020, the total number of cryptocurrencies was over 5K altcoins and 20K markets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel17a-content" id="panel17a-header">
          <Typography className='acrd'>There were over 4000 cryptocurrencies as of 2021. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          So, how many cryptocurrencies are there today?
          Between 2013 and 2021 is 4000+. That is an over 90% increase for 2013’s 66.
          It’s relatively easy to make these digital assets, and it’s no wonder that they keep popping up.
          Not all of them, however, are dominant. 
          Etherium, Bitcoin, Tether, XRP, and Litecoin are the creme-de-la-creme and take at least 83% of the market. 
          It’s important to note that not all virtual currencies survive. 
          1984 is the number of coins that haven’t pulled through. Some like BitConnect were outed as Ponzi schemes. 
          Others went down due to catastrophic hacks, while many became valueless. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel18a-content" id="panel18a-header">
          <Typography className='acrd'>65% of cryptocurrency users are bitcoin owners.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Bitcoin is the most popular cyber currency.
          According to cryptocurrency users statistics for 2022, it has almost 70% ownership. Even better, 
          digital cash traders allocate up to 20% of their portfolio to Bitcoin.
          So how are these traders using this type of crypto? 
          Here is the usage breakdown:
          1. Almost 40% of users hold on to the coins for dear life instead of selling
          2. 11% utilize it for making payments for goods and services. Think of it as barter trade.
          3. 22% use it to lend or stake.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel19a-content" id="panel19a-header">
          <Typography className='acrd'>There were 68 million wallet users by February 2021.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          Users store their personal data in wallets. It works like a regular wallet or bank account, 
          just in digital form. By Q4 of 2020, there were 63M wallet owners, but that number increased by 3M by Q1 Of 2020. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.301)"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>} aria-controls="panel20a-content" id="panel20a-header">
          <Typography className='acrd'>Collectively Blockfi and Bitpay offered decentralized financing worth $232 million in 2020.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='acrd'>
          It’s hard to ignore the decentralized funding that has been happening in the blockchain space for the last few years. 
          According to cryptocurrency statistics, Bitpay offered Bitcoin payments worth $72 million, while Blockfi issued loans with crypto as a security. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
<div className='im'></div>
          <div>
            <div className='cop'>
              <p>This site haven't coppirate rules.<br/><hr/><br/><hr/>You can use him, if you want and how you want)</p>
            </div>
            <div className='im2' data-aos="zoom-out"></div>
            <div className='cop2' data-aos="fade-up">
              <p>Directed by DISCLAIMER-RYTP</p>
            </div>
          </div>
          </div>
        <div/>
      </div>
    </div>
  )
}

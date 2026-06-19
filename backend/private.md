#Reference
Production grade server
1. SV-002 (pi@100.107.95.16) (Mimo 2.0)
Hostname: pi 
root password:printpi
Tailscale IP: 100.107.95.16
Local IP: 192.168.8.197
mimo-listener Service Status:
Active: active (running) since Jun 17, 19:47:20 IST (~15 hours ago)
Configured Identity: SV-002
Target Printers: B&W: Brother_HL_L2440DW_series | Color: Epson_L3250
2. CV-001 (printpi@100.70.107.44) (Mimo 1.0)
Hostname: printpi
root password:printpi
Tailscale IP: 100.70.107.44
Local IP: 10.108.2.19
mimo-listener Service Status:
Active: active (running) since Jun 17, 16:51:30 IST (~18 hours ago)
Configured Identity: CV-001
Target Printers: B&W: Brother_HL_L5210DN_series | Color: Brother_IPP

#Problems
0- When the printer is offline, the kiosk url still shows the print successful instead of throwing error.  (SV-002, CV-001)
1- The kiosk url print progress bar is not in sync with print. It shows the print success and physical print is still in print. I want the kiosk url progress bar to be in sync with print. when the physical prints comes out then only it should show completed.  (SV-002, CV-001)
2 - I uploaded a 5.4 mb single page pdf file and selected duplex print(2 sided print) and 2 copies and it took extreme time to print in cv 001 and only 1 copy of duplex print came and in sv 002 black and white printer the print didnt come.
3 - The cv 001 is a monochrome printer so it shouldnt support color printing.  (CV-001)
4 - None of  the printers are printing the layouts like 2 per page layout or 4 per page layout. (SV-002, CV-001)
5- I want the print to be quick and fast like moment the user enters 4 digit code the print should get triggered i can see that large files and multiple files there are issues. Fix that. (SV-002, CV-001).
6 - Find the bugs and make the system robust and production grade and most importantly fast. My friend had created a similar project and its pi was constantly listening he said and it printed fast without compromising the quality.
7 - If there are any payment bugs solve it. 
8- I printed mimo graph by entering code and it didnt print any. And last week it was printing zoomed in all printers.
9- I want you to make sure that all printers have right configurations and listeners or services.
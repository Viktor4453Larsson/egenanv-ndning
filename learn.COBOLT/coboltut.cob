>>SOURCE FORMAT FREE
IDENTIFICATION DEVISION. 
PROGRAM-ID. cobultut.
AUTHOR. Viktor Larsson.
DATE-WRITTEN.January 19 2021
ENVIRONMENT DIVISION. 
DATA DIVISION.
FILE SECTION.
WORKING-STORAGE SECTION.
01 UserName PIC X(30) VALUE "YOU".
01 Num1    PIC 9 VALUE ZEROS.
02 Num2   PIC 9 VALUE ZEROS.
01 Total  PIC 99 VALUE 0.
01 SSNum. 
       02 SSArea PIC 999.
       02 SSGroup PIC 99.
       02 SSSerial PIC 9999.
01 PIValue CONSTANT AS 3.14.
*> ZERO, ZEROES 
*> SPACE SPACES
*> HIGH-VALUES
*> LOW-VALUES

PROCEDURE DIVISION.


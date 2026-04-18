@echo off
node "c:\Users\sibes\Documents\AI Projects\Self Hosted Websites\thinkbox\merge2.js" > "c:\Users\sibes\merge_output.txt" 2>&1
echo Exit code: %ERRORLEVEL% >> "c:\Users\sibes\merge_output.txt"

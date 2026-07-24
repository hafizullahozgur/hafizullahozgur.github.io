# React + Vite

Update:
Open terminal then run the below codes:
npm run build 
npm run deploy

To delete dist and node_modules folders:
rmdir /s /q dist
rmdir /s /q node_modules
if not deleted run the following codes:
Remove-Item -Recurse -Force dist
Remove-Item -Recurse -Force node_modules

then
npm install
npm run build
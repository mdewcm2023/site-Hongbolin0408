var tipuesearch = {"pages": [{'title': 'About', 'text': '倉庫：\xa0  https://github.com/mdewcm2023/site-Hongbolin0408 \n 網站：\xa0\xa0 https://mdewcm2023.github.io/site-Hongbolin0408 \n', 'tags': '', 'url': 'About.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '權限', 'text': '近端倉儲的設定檔案:倉儲目錄下 .git中的config. 代表倉儲的 configuration flie (設定檔案) \n', 'tags': '', 'url': '權限.html'}, {'title': '提交', 'text': 'commit \n git commit -m \n message \n 指令執行時，隨後要接上提交字串，說明本次提交的改版說明 \n', 'tags': '', 'url': '提交.html'}, {'title': '補課', 'text': '期中考考試 \n', 'tags': '', 'url': '補課.html'}, {'title': 'New bing', 'text': '想了解有關使用 cmsimde 和 GitHub Pages 創建靜態網站的具體信息 \n 要使用 cmsimde 和 GitHub Pages 創建靜態網站，要執行以下步驟： \n \n 在 github.com 建立一個新的倉儲 \n 針對新倉儲設定 Github Pages,\xa0 把 main branch 設為網站根目錄 \n 把倉儲 git clone 到近端, 加上 cmsimde 程式, 並將 up_dir 內容複製到倉儲根目錄 \n 在近端執行動態網站, 用來編輯動態網站與靜態網站內容 (透過動態網站內容 generate_pages 而產生) \n 以 git add ., git commit -m "提交說明字串", git push (git commit 指令需要有身分設定, 也就是 home_ipv6 或 home_ipv4\xa0 目錄中的 user.name 與 user.email 進行提交, 至於 git push 需要 .git/config 中 url 可以透過 token 標示倉儲存取權, 而 home_ipv6/.gitconfig 若在純 IPv6 下還需要有 http.proxy 的設定) \n 持續利用 localhost 中的動態網站修改內容後, 轉為靜態然後重複上一個 acp 流程將改版送到 github.com \n \n', 'tags': '', 'url': 'New bing.html'}, {'title': '拉回請求', 'text': '當 github 用戶對特定倉儲無直接存取權的時候: \n \n 保留該特定倉儲的所有資料 - 登入 github 帳號, 按 fork 之後， 將該倉儲放入自己的帳號裡面 \n 修改該倉儲的資料 (找到倉儲內的要修改的資料 ， 更改後請原始倉儲擁有者可以內容合併), fork 後可以在自己的帳號下改版, 然後送出 pull requests (拉回請求, 請求原始倉儲作者可以 review 後, 決定是否合併) \n \n', 'tags': '', 'url': '拉回請求.html'}, {'title': '建網頁', 'text': '用個人的site帳號建立網頁 \n \n git clone 倉儲到近端 \n add \xa0 https://github.com/mdecycu/cmsimde \xa0倉儲 \n 將 up_dir 內容複製到個人倉儲的根目錄 \n 有關提交 (git config - 設定存至可攜 home 目錄中的 .gitconfig)與推送 (htts by token, SSH by keys) 的設定 \n 配合將 github.com 上的倉儲設為 Github Pages, 把 main 分支設為網頁根目錄 \n \n https token 必須勾選 repo 權限, 若要利用 Github Actions, 則同時勾選 Actions \n', 'tags': '', 'url': '建網頁.html'}, {'title': 'w9', 'text': '利用 Brython 讀取 url 中的資料: \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    stud = i.split(":")[0]\n    score = i.split(":")[1]\n    print(stud, score) \n', 'tags': '', 'url': 'w9.html'}, {'title': '資料結構', 'text': '\n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt , \n \n 分別讀取各次考試的成績，其中利用了list(數列),但每次讀取後,若無法將各學員的成績累加後求取平均,則無法列出個學員的期中成績 \n \n', 'tags': '', 'url': '資料結構.html'}, {'title': 'Bing', 'text': '這是各個學員的平均成績 \n # Example data for five tests\nurl1 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\nurl2 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6.txt"\nurl3 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6-2.txt"\nurl4 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/075c06b2baf1bb07665f1a98e9f88f7e81ebe1a4/1aw8.txt"\nurl5 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw9.txt"\n\n\'\'\'\ntest1 = ["12345:80", "67890:70"]\ntest2 = ["12345:85", "67890:75"]\ntest3 = ["12345:90", "67890:80"]\ntest4 = ["12345:95", "67890:85"]\ntest5 = ["12345:100", "67890:90"]\n\'\'\'\ntest1 = open(url1).read().split("\\n")[1:]\ntest2 = open(url2).read().split("\\n")[1:]\ntest3 = open(url3).read().split("\\n")[1:]\ntest4 = open(url4).read().split("\\n")[1:]\ntest5 = open(url5).read().split("\\n")[1:]\n\n\n# Create a dictionary to store the student numbers and their test scores\nstudent_scores = {}\n\n# Iterate over the data for each test\nfor test_data in [test1, test2, test3, test4, test5]:\n    # Iterate over the data for this test\n    for item in test_data:\n        # Split the item into its components\n        student_number, score = item.split(":")\n\n        # Convert the score to an integer\n        try:\n            score = int(score)\n        except:\n            score = 0\n\n        # Add the score to the list of scores for this student\n        if student_number not in student_scores:\n            student_scores[student_number] = []\n        student_scores[student_number].append(score)\n\n# Calculate the average score for each student\nfor student_number, scores in student_scores.items():\n    average_score = int(sum(scores) / len(scores))\n    print(f"{student_number}的期中平均成績 {average_score}") \n', 'tags': '', 'url': 'Bing.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>', 'tags': '', 'url': 'Brython.html'}]};
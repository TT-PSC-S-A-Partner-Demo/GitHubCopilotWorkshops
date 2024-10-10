## Main features - Where can I find Copilot?

Everywhere: Code editor, multiple chat modes, CLI, commit messages and pull request summaries.

It is also available in **GitHub Mobile App** and on **GitHub.com**, with a subscription to Copilot Enterprise.

Access Copilot via:

- **Code completions a.k.a. 'ghost text'** - just start typing
    - You can also access Copilot by writing a comment and expressing what you want
    - You can also disable completions in **GitHub Copilot status icon** (to avoid to much 'noise')
- **Chat**
    - **Inline Chat** - <kbd>Ctrl + I</kbd> It gives you what to accept changes first or highlight important code
    - **Quick Chat** - <kbd>Ctrl + Shift + I</kbd>
    - **Side panel Chat** - <kbd>Ctrl + Alt + I</kbd> Solve and brainstorm more complex problems or analyse the codebase, learn new languages and frameworks, multiple chats and docking are also possible
- **Sparkle Icon** - a.k.a Smart actions - quicky invoke copilot in code editor, terminal, commit message and pull request     summary
- **Context menu** - Highlight a code snippet and navigate to Copilot in VS Code context menu


### Essential keyboard shortcuts

- <kbd>Tab</kbd> - Accept the whole suggestion
- <kbd>Esc</kbd> - Dismiss suggestion
- <kbd>Control + -></kbd> - Accept one word only
- <kbd>Control + Enter</kbd> - See alternative suggestions
- <kbd>Alt + ], Alt + [</kbd> - Next/Prev alternative suggestion
- <kbd>Ctrl + L</kbd> - New chat

### Slash Commands

<kbd>/help</kbd> - display all slash commands and agents (participants)


| Command   | Description                                                  | Usage                                                                                                              |
|-----------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| <kbd>/explain</kbd>  | Get code explanations                                        | Open file with code or highlight code you want explained and type:<br>/explain what is the fetchPrediction method? |
| <kbd>/fix</kbd>       | Receive a proposed fix for the problems in the selected code | Highlight problematic code and type:<br>/fix propose a fix for the problems in fetchAirports route                 |
| <kbd>/tests</kbd>     | Generate unit tests for selected code                        | Open file with code or highlight code you want tests for and type:<br>/tests                                       |
| <kbd>/help</kbd>      | Get help on using Copilot Chat                               | Type:<br>/help what can you do?                                                                                    |
| <kbd>/clear</kbd>     | Clear current conversation                                   | Type:<br>/clear                                                                                                    |
| <kbd>/doc</kbd>      | Add a documentation comment                                  | Highlight code and type:<br>/doc<br>You can also press Ctrl+I in your editor and type /doc/ inline                  |
| <kbd>/generate</kbd>  | Generate code to answer your question                        | Type:<br>/generate code that validates a phone number                                                              |
| <kbd>/optimize</kbd>  | Analyze and improve running time of the selected code        | Highlight code and type:<br>/optimize fetchPrediction method                                                       |
| <kbd>/clear</kbd>     | Clear current chat                                           | Type:<br>/clear                                                                                                    |
| <kbd>/new</kbd>       | Scaffold code for a new workspace                            | Type:<br>/new create a new django app                                                                              |
| <kbd>/simplify</kbd>  | Simplify the selected code                                   | Highlight code and type:<br>/simplify                                                                              |
| <kbd>/feedback</kbd>  | Provide feedback to the team                                 | Type:<br>/feedback                                                                                                 |

### Agents (participants)

- **@workspace** - ask a questions related to your actual workspace
- **@terminal** - ask a questions related to info in your terminal
- **@vscode** - ask the questions related to VS Code
- **@github** - get answers grounded in web search, code search, and your enterprise's knowledge bases

### Variables

- **#codebase**: the contents of the current workspace. It includes information about the files and folders in your workspace, as well as any settings or configurations specific to that workspace.
- **#editor**: the code in the active editor. The editor content is implicitly included in the Chat view context.
- **#file**: include a specified file in your workspace as context with your chat prompt.
- **#git**: information about the current git repository, such as the workspace folder, branch name, remotes, and more.
- **#selection**: the visible source code in the active editor.
- **#terminalLastCommand**: the active terminal's last run command.
- **#terminalSelection**: the active terminal's selection.

---


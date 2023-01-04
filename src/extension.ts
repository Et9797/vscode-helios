import { ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient/node';


let client: LanguageClient;


export function activate(context: ExtensionContext) {

   const serverOptions: ServerOptions = {
      command: 'helios-language-server'
   };
   const clientOptions: LanguageClientOptions = {
      documentSelector: [{ scheme: 'file', language: 'plaintext' }, { scheme: 'file', language: 'rust' }]
   };
   client = new LanguageClient(
      'hls',
      'Helios Language Server',
      serverOptions,
      clientOptions
   );

   client.start();
}


export function deactivate(): Promise<void> | undefined {
	return client ? client.stop() : undefined
}
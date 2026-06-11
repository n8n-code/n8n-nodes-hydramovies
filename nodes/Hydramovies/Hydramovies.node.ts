import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class Hydramovies implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hydramovies',
		name: 'N8nDevHydramovies',
		icon: { light: 'file:./hydramovies.svg', dark: 'file:./hydramovies.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Hydra Movies: streaming service with thousands of popular movie records.',
		defaults: { name: 'Hydramovies' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevHydramoviesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

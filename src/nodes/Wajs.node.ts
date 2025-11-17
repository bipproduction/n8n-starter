import type {
  INodeType,
  INodeTypeDescription,
  IExecuteFunctions,
} from "n8n-workflow";
import axios from "axios";

export class Wajs implements INodeType {
  description: INodeTypeDescription = {
    displayName: "wajs",
    name: "Wajs",
    icon: "file:icon.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"]}}',
    description:
      "Universal node generated from OpenAPI - satu node memuat semua endpoint",
    defaults: { name: "Wajs" },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [{ name: "wajs", required: true }],
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        options: [
          {
            name: "apikey post api apikey create",
            value: "apikey_postApiApikeyCreate",
            description: "create api key",
            action: "apikey post api apikey create",
          },
          {
            name: "apikey get api apikey list",
            value: "apikey_getApiApikeyList",
            description: "get api key list",
            action: "apikey get api apikey list",
          },
          {
            name: "apikey delete api apikey delete",
            value: "apikey_deleteApiApikeyDelete",
            description: "delete api key",
            action: "apikey delete api apikey delete",
          },
          {
            name: "default get api dashboard apa",
            value: "default_getApiDashboardApa",
            description: "",
            action: "default get api dashboard apa",
          },
          {
            name: "default get api user find",
            value: "default_getApiUserFind",
            description: "",
            action: "default get api user find",
          },
          {
            name: "WhatsApp post api wa start",
            value: "WhatsApp_postApiWaStart",
            description: "",
            action: "WhatsApp post api wa start",
          },
          {
            name: "WhatsApp get api wa qr",
            value: "WhatsApp_getApiWaQr",
            description: "",
            action: "WhatsApp get api wa qr",
          },
          {
            name: "WhatsApp get api wa ready",
            value: "WhatsApp_getApiWaReady",
            description: "",
            action: "WhatsApp get api wa ready",
          },
          {
            name: "WhatsApp post api wa restart",
            value: "WhatsApp_postApiWaRestart",
            description: "",
            action: "WhatsApp post api wa restart",
          },
          {
            name: "WhatsApp post api wa force start",
            value: "WhatsApp_postApiWaForce_start",
            description: "",
            action: "WhatsApp post api wa force start",
          },
          {
            name: "WhatsApp post api wa stop",
            value: "WhatsApp_postApiWaStop",
            description: "",
            action: "WhatsApp post api wa stop",
          },
          {
            name: "WhatsApp get api wa state",
            value: "WhatsApp_getApiWaState",
            description: "",
            action: "WhatsApp get api wa state",
          },
          {
            name: "WhatsApp post api wa send text",
            value: "WhatsApp_postApiWaSend_text",
            description: "Send text to WhatsApp",
            action: "WhatsApp post api wa send text",
          },
          {
            name: "WhatsApp post api wa send media",
            value: "WhatsApp_postApiWaSend_media",
            description: "Send media to WhatsApp",
            action: "WhatsApp post api wa send media",
          },
          {
            name: "Webhook post api webhook create",
            value: "Webhook_postApiWebhookCreate",
            description: "Create webhook",
            action: "Webhook post api webhook create",
          },
          {
            name: "Webhook get api webhook list",
            value: "Webhook_getApiWebhookList",
            description: "List webhooks",
            action: "Webhook get api webhook list",
          },
          {
            name: "Webhook get api webhook find by id",
            value: "Webhook_getApiWebhookFindById",
            description: "Find webhook",
            action: "Webhook get api webhook find by id",
          },
          {
            name: "Webhook delete api webhook remove by id",
            value: "Webhook_deleteApiWebhookRemoveById",
            description: "Remove webhook",
            action: "Webhook delete api webhook remove by id",
          },
          {
            name: "Webhook put api webhook update by id",
            value: "Webhook_putApiWebhookUpdateById",
            description: "Update webhook",
            action: "Webhook put api webhook update by id",
          },
          {
            name: "chatflows get api chatflows sync",
            value: "chatflows_getApiChatflowsSync",
            description: "Sync chatflows",
            action: "chatflows get api chatflows sync",
          },
          {
            name: "chatflows get api chatflows find",
            value: "chatflows_getApiChatflowsFind",
            description: "Find chatflows",
            action: "chatflows get api chatflows find",
          },
          {
            name: "chatflows get api chatflows default",
            value: "chatflows_getApiChatflowsDefault",
            description: "Get default chatflows",
            action: "chatflows get api chatflows default",
          },
          {
            name: "chatflows put api chatflows default",
            value: "chatflows_putApiChatflowsDefault",
            description: "Update default chatflows",
            action: "chatflows put api chatflows default",
          },
          {
            name: "chatflows post api chatflows query",
            value: "chatflows_postApiChatflowsQuery",
            description: "Query chatflows",
            action: "chatflows post api chatflows query",
          },
          {
            name: "chatflows put api chatflows flow active",
            value: "chatflows_putApiChatflowsFlow_active",
            description: "Update flow active",
            action: "chatflows put api chatflows flow active",
          },
          {
            name: "chatflows get api chatflows url token",
            value: "chatflows_getApiChatflowsUrl_token",
            description: "Get flow url and token",
            action: "chatflows get api chatflows url token",
          },
          {
            name: "chatflows put api chatflows url token",
            value: "chatflows_putApiChatflowsUrl_token",
            description: "Update flow url and token",
            action: "chatflows put api chatflows url token",
          },
          {
            name: "auth post auth login",
            value: "auth_postAuthLogin",
            description: "login",
            action: "auth post auth login",
          },
          {
            name: "auth delete auth logout",
            value: "auth_deleteAuthLogout",
            description: "logout",
            action: "auth delete auth logout",
          },
          {
            name: "WhatsApp Hook get wa hook hook",
            value: "WhatsApp_Hook_getWa_hookHook",
            description: "Webhook Verification",
            action: "WhatsApp Hook get wa hook hook",
          },
          {
            name: "WhatsApp Hook post wa hook hook",
            value: "WhatsApp_Hook_postWa_hookHook",
            description: "Receive WhatsApp Messages",
            action: "WhatsApp Hook post wa hook hook",
          },
          {
            name: "WhatsApp Hook get wa hook list",
            value: "WhatsApp_Hook_getWa_hookList",
            description: "List WhatsApp Hook",
            action: "WhatsApp Hook get wa hook list",
          },
          {
            name: "WhatsApp Hook post wa hook reset",
            value: "WhatsApp_Hook_postWa_hookReset",
            description: "Reset WhatsApp Hook",
            action: "WhatsApp Hook post wa hook reset",
          },
          {
            name: "logs get logs show",
            value: "logs_getLogsShow",
            description: "Get logs",
            action: "logs get logs show",
          },
          {
            name: "logs post logs clear",
            value: "logs_postLogsClear",
            description: "Clear logs",
            action: "logs post logs clear",
          },
        ],
        default: "apikey_postApiApikeyCreate",
        description: "Pilih endpoint yang akan dipanggil",
      },

      {
        displayName: "Body name",
        name: "body_name",
        type: "string",
        default: "",
        placeholder: "name",
        description: "name",
        displayOptions: { show: { operation: ["apikey_postApiApikeyCreate"] } },
      },

      {
        displayName: "Body description",
        name: "body_description",
        type: "string",
        default: "",
        placeholder: "description",
        description: "description",
        displayOptions: { show: { operation: ["apikey_postApiApikeyCreate"] } },
      },

      {
        displayName: "Body id",
        name: "body_id",
        type: "string",
        default: "",
        placeholder: "id",
        description: "id",
        displayOptions: {
          show: { operation: ["apikey_deleteApiApikeyDelete"] },
        },
      },

      {
        displayName: "Body number",
        name: "body_number",
        type: "string",
        default: "",
        placeholder: "number",
        description: "number",
        displayOptions: {
          show: { operation: ["WhatsApp_postApiWaSend_text"] },
        },
      },

      {
        displayName: "Body text",
        name: "body_text",
        type: "string",
        default: "",
        placeholder: "text",
        description: "text",
        displayOptions: {
          show: { operation: ["WhatsApp_postApiWaSend_text"] },
        },
      },

      {
        displayName: "Body number",
        name: "body_number",
        type: "string",
        default: "",
        placeholder: "number",
        description: "number",
        displayOptions: {
          show: { operation: ["WhatsApp_postApiWaSend_media"] },
        },
      },

      {
        displayName: "Body media",
        name: "body_media",
        type: "string",
        default: "",
        placeholder: "media",
        description: "media",
        displayOptions: {
          show: { operation: ["WhatsApp_postApiWaSend_media"] },
        },
      },

      {
        displayName: "Body name",
        name: "body_name",
        type: "string",
        default: "",
        placeholder: "name",
        description: "name",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body description",
        name: "body_description",
        type: "string",
        default: "",
        placeholder: "description",
        description: "description",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body url",
        name: "body_url",
        type: "string",
        default: "",
        placeholder: "url",
        description: "url",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body method",
        name: "body_method",
        type: "string",
        default: "",
        placeholder: "method",
        description: "method",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body headers",
        name: "body_headers",
        type: "string",
        default: "",
        placeholder: "headers",
        description: "headers",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body payload",
        name: "body_payload",
        type: "string",
        default: "",
        placeholder: "payload",
        description: "payload",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body apiToken",
        name: "body_apiToken",
        type: "string",
        default: "",
        placeholder: "apiToken",
        description: "apiToken",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body enabled",
        name: "body_enabled",
        type: "boolean",
        default: false,
        placeholder: "enabled",
        description: "enabled",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body replay",
        name: "body_replay",
        type: "boolean",
        default: false,
        placeholder: "replay",
        description: "replay",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body replayKey",
        name: "body_replayKey",
        type: "string",
        default: "",
        placeholder: "replayKey",
        description: "replayKey",
        displayOptions: {
          show: { operation: ["Webhook_postApiWebhookCreate"] },
        },
      },

      {
        displayName: "Body name",
        name: "body_name",
        type: "string",
        default: "",
        placeholder: "name",
        description: "name",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body description",
        name: "body_description",
        type: "string",
        default: "",
        placeholder: "description",
        description: "description",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body url",
        name: "body_url",
        type: "string",
        default: "",
        placeholder: "url",
        description: "url",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body method",
        name: "body_method",
        type: "string",
        default: "",
        placeholder: "method",
        description: "method",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body headers",
        name: "body_headers",
        type: "string",
        default: "",
        placeholder: "headers",
        description: "headers",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body payload",
        name: "body_payload",
        type: "string",
        default: "",
        placeholder: "payload",
        description: "payload",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body apiToken",
        name: "body_apiToken",
        type: "string",
        default: "",
        placeholder: "apiToken",
        description: "apiToken",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body enabled",
        name: "body_enabled",
        type: "boolean",
        default: false,
        placeholder: "enabled",
        description: "enabled",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body replay",
        name: "body_replay",
        type: "boolean",
        default: false,
        placeholder: "replay",
        description: "replay",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body replayKey",
        name: "body_replayKey",
        type: "string",
        default: "",
        placeholder: "replayKey",
        description: "replayKey",
        displayOptions: {
          show: { operation: ["Webhook_putApiWebhookUpdateById"] },
        },
      },

      {
        displayName: "Body id",
        name: "body_id",
        type: "string",
        default: "",
        placeholder: "id",
        description: "id",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsDefault"] },
        },
      },

      {
        displayName: "Body flowId",
        name: "body_flowId",
        type: "string",
        default: "",
        placeholder: "flowId",
        description: "flowId",
        displayOptions: {
          show: { operation: ["chatflows_postApiChatflowsQuery"] },
        },
      },

      {
        displayName: "Body question",
        name: "body_question",
        type: "string",
        default: "",
        placeholder: "question",
        description: "question",
        displayOptions: {
          show: { operation: ["chatflows_postApiChatflowsQuery"] },
        },
      },

      {
        displayName: "Body active",
        name: "body_active",
        type: "boolean",
        default: false,
        placeholder: "active",
        description: "active",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsFlow_active"] },
        },
      },

      {
        displayName: "Body flowUrl",
        name: "body_flowUrl",
        type: "string",
        default: "",
        placeholder: "flowUrl",
        description: "flowUrl",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsUrl_token"] },
        },
      },

      {
        displayName: "Body flowToken",
        name: "body_flowToken",
        type: "string",
        default: "",
        placeholder: "flowToken",
        description: "flowToken",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsUrl_token"] },
        },
      },

      {
        displayName: "Body waPhoneNumberId",
        name: "body_waPhoneNumberId",
        type: "string",
        default: "",
        placeholder: "waPhoneNumberId",
        description: "waPhoneNumberId",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsUrl_token"] },
        },
      },

      {
        displayName: "Body waToken",
        name: "body_waToken",
        type: "string",
        default: "",
        placeholder: "waToken",
        description: "waToken",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsUrl_token"] },
        },
      },

      {
        displayName: "Body active",
        name: "body_active",
        type: "boolean",
        default: false,
        placeholder: "active",
        description: "active",
        displayOptions: {
          show: { operation: ["chatflows_putApiChatflowsUrl_token"] },
        },
      },

      {
        displayName: "Body email",
        name: "body_email",
        type: "string",
        default: "",
        placeholder: "email",
        description: "email",
        displayOptions: { show: { operation: ["auth_postAuthLogin"] } },
      },

      {
        displayName: "Body password",
        name: "body_password",
        type: "string",
        default: "",
        placeholder: "password",
        description: "password",
        displayOptions: { show: { operation: ["auth_postAuthLogin"] } },
      },

      {
        displayName: "Query hub.mode",
        name: "query_hub.mode",
        type: "string",
        default: "",
        placeholder: "hub.mode",
        description: "hub.mode",
        displayOptions: {
          show: { operation: ["WhatsApp_Hook_getWa_hookHook"] },
        },
      },

      {
        displayName: "Query hub.verify_token",
        name: "query_hub.verify_token",
        type: "string",
        default: "",
        placeholder: "hub.verify_token",
        description: "hub.verify_token",
        displayOptions: {
          show: { operation: ["WhatsApp_Hook_getWa_hookHook"] },
        },
      },

      {
        displayName: "Query hub.challenge",
        name: "query_hub.challenge",
        type: "string",
        default: "",
        placeholder: "hub.challenge",
        description: "hub.challenge",
        displayOptions: {
          show: { operation: ["WhatsApp_Hook_getWa_hookHook"] },
        },
      },

      {
        displayName: "Query page",
        name: "query_page",
        type: "string",
        default: "",
        placeholder: "page",
        description: "page",
        displayOptions: {
          show: { operation: ["WhatsApp_Hook_getWa_hookList"] },
        },
      },

      {
        displayName: "Query limit",
        name: "query_limit",
        type: "string",
        default: "",
        placeholder: "limit",
        description: "limit",
        displayOptions: {
          show: { operation: ["WhatsApp_Hook_getWa_hookList"] },
        },
      },

      {
        displayName: "Query lines",
        name: "query_lines",
        type: "string",
        default: "",
        placeholder: "lines",
        description: "lines",
        displayOptions: { show: { operation: ["logs_getLogsShow"] } },
      },

      {
        displayName: "Query level",
        name: "query_level",
        type: "string",
        default: "",
        placeholder: "level",
        description: "level",
        displayOptions: { show: { operation: ["logs_getLogsShow"] } },
      },
    ],
  };

  async execute(this: IExecuteFunctions) {
    const items = this.getInputData();
    const returnData: any[] = [];
    const creds = (await this.getCredentials("wajs")) as any;

    const baseUrlRaw = creds?.baseUrl ?? "";
    const apiKeyRaw = creds?.token ?? "";
    const baseUrl = String(baseUrlRaw || "").replace(/\/$/, "");
    const apiKey = String(apiKeyRaw || "")
      .trim()
      .replace(/^Bearer\s+/i, "");

    if (!baseUrl) throw new Error("Base URL tidak ditemukan");
    if (!apiKey) throw new Error("Token tidak ditemukan");

    for (let i = 0; i < items.length; i++) {
      const operation = this.getNodeParameter("operation", i) as string;

      let url = "";
      let method: any = "get";
      let axiosConfig: any = {};
      const finalHeaders: any = { Authorization: `Bearer ${apiKey}` };

      switch (operation) {
        case "apikey_postApiApikeyCreate": {
          const body_name = this.getNodeParameter("body_name", i, "") as any;
          const body_description = this.getNodeParameter(
            "body_description",
            i,
            "",
          ) as any;
          const body = { name: body_name, description: body_description };
          url = baseUrl + "/api/apikey/create";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "apikey_getApiApikeyList": {
          const body = undefined;
          url = baseUrl + "/api/apikey/list";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "apikey_deleteApiApikeyDelete": {
          const body_id = this.getNodeParameter("body_id", i, "") as any;
          const body = { id: body_id };
          url = baseUrl + "/api/apikey/delete";
          method = "delete";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "default_getApiDashboardApa": {
          const body = undefined;
          url = baseUrl + "/api/dashboard/apa";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "default_getApiUserFind": {
          const body = undefined;
          url = baseUrl + "/api/user/find";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "WhatsApp_postApiWaStart": {
          const body = undefined;
          url = baseUrl + "/api/wa/start";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_getApiWaQr": {
          const body = undefined;
          url = baseUrl + "/api/wa/qr";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "WhatsApp_getApiWaReady": {
          const body = undefined;
          url = baseUrl + "/api/wa/ready";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "WhatsApp_postApiWaRestart": {
          const body = undefined;
          url = baseUrl + "/api/wa/restart";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_postApiWaForce_start": {
          const body = undefined;
          url = baseUrl + "/api/wa/force-start";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_postApiWaStop": {
          const body = undefined;
          url = baseUrl + "/api/wa/stop";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_getApiWaState": {
          const body = undefined;
          url = baseUrl + "/api/wa/state";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "WhatsApp_postApiWaSend_text": {
          const body_number = this.getNodeParameter(
            "body_number",
            i,
            "",
          ) as any;
          const body_text = this.getNodeParameter("body_text", i, "") as any;
          const body = { number: body_number, text: body_text };
          url = baseUrl + "/api/wa/send-text";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_postApiWaSend_media": {
          const body_number = this.getNodeParameter(
            "body_number",
            i,
            "",
          ) as any;
          const body_media = this.getNodeParameter("body_media", i, "") as any;
          const body = { number: body_number, media: body_media };
          url = baseUrl + "/api/wa/send-media";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "Webhook_postApiWebhookCreate": {
          const body_name = this.getNodeParameter("body_name", i, "") as any;
          const body_description = this.getNodeParameter(
            "body_description",
            i,
            "",
          ) as any;
          const body_url = this.getNodeParameter("body_url", i, "") as any;
          const body_method = this.getNodeParameter(
            "body_method",
            i,
            "",
          ) as any;
          const body_headers = this.getNodeParameter(
            "body_headers",
            i,
            "",
          ) as any;
          const body_payload = this.getNodeParameter(
            "body_payload",
            i,
            "",
          ) as any;
          const body_api_token = this.getNodeParameter(
            "body_api_token",
            i,
            "",
          ) as any;
          const body_enabled = this.getNodeParameter(
            "body_enabled",
            i,
            "",
          ) as any;
          const body_replay = this.getNodeParameter(
            "body_replay",
            i,
            "",
          ) as any;
          const body_replay_key = this.getNodeParameter(
            "body_replay_key",
            i,
            "",
          ) as any;
          const body = {
            name: body_name,
            description: body_description,
            url: body_url,
            method: body_method,
            headers: body_headers,
            payload: body_payload,
            api_token: body_api_token,
            enabled: body_enabled,
            replay: body_replay,
            replay_key: body_replay_key,
          };
          url = baseUrl + "/api/webhook/create";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "Webhook_getApiWebhookList": {
          const body = undefined;
          url = baseUrl + "/api/webhook/list";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "Webhook_getApiWebhookFindById": {
          const body = undefined;
          url = baseUrl + "/api/webhook/find/{id}";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "Webhook_deleteApiWebhookRemoveById": {
          const body = undefined;
          url = baseUrl + "/api/webhook/remove/{id}";
          method = "delete";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "Webhook_putApiWebhookUpdateById": {
          const body_name = this.getNodeParameter("body_name", i, "") as any;
          const body_description = this.getNodeParameter(
            "body_description",
            i,
            "",
          ) as any;
          const body_url = this.getNodeParameter("body_url", i, "") as any;
          const body_method = this.getNodeParameter(
            "body_method",
            i,
            "",
          ) as any;
          const body_headers = this.getNodeParameter(
            "body_headers",
            i,
            "",
          ) as any;
          const body_payload = this.getNodeParameter(
            "body_payload",
            i,
            "",
          ) as any;
          const body_api_token = this.getNodeParameter(
            "body_api_token",
            i,
            "",
          ) as any;
          const body_enabled = this.getNodeParameter(
            "body_enabled",
            i,
            "",
          ) as any;
          const body_replay = this.getNodeParameter(
            "body_replay",
            i,
            "",
          ) as any;
          const body_replay_key = this.getNodeParameter(
            "body_replay_key",
            i,
            "",
          ) as any;
          const body = {
            name: body_name,
            description: body_description,
            url: body_url,
            method: body_method,
            headers: body_headers,
            payload: body_payload,
            api_token: body_api_token,
            enabled: body_enabled,
            replay: body_replay,
            replay_key: body_replay_key,
          };
          url = baseUrl + "/api/webhook/update/{id}";
          method = "put";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "chatflows_getApiChatflowsSync": {
          const body = undefined;
          url = baseUrl + "/api/chatflows/sync";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "chatflows_getApiChatflowsFind": {
          const body = undefined;
          url = baseUrl + "/api/chatflows/find";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "chatflows_getApiChatflowsDefault": {
          const body = undefined;
          url = baseUrl + "/api/chatflows/default";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "chatflows_putApiChatflowsDefault": {
          const body_id = this.getNodeParameter("body_id", i, "") as any;
          const body = { id: body_id };
          url = baseUrl + "/api/chatflows/default";
          method = "put";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "chatflows_postApiChatflowsQuery": {
          const body_flow_id = this.getNodeParameter(
            "body_flow_id",
            i,
            "",
          ) as any;
          const body_question = this.getNodeParameter(
            "body_question",
            i,
            "",
          ) as any;
          const body = { flow_id: body_flow_id, question: body_question };
          url = baseUrl + "/api/chatflows/query";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "chatflows_putApiChatflowsFlow_active": {
          const body_active = this.getNodeParameter(
            "body_active",
            i,
            "",
          ) as any;
          const body = { active: body_active };
          url = baseUrl + "/api/chatflows/flow-active";
          method = "put";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "chatflows_getApiChatflowsUrl_token": {
          const body = undefined;
          url = baseUrl + "/api/chatflows/url-token";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
          };
          break;
        }

        case "chatflows_putApiChatflowsUrl_token": {
          const body_flow_url = this.getNodeParameter(
            "body_flow_url",
            i,
            "",
          ) as any;
          const body_flow_token = this.getNodeParameter(
            "body_flow_token",
            i,
            "",
          ) as any;
          const body_wa_phone_number_id = this.getNodeParameter(
            "body_wa_phone_number_id",
            i,
            "",
          ) as any;
          const body_wa_token = this.getNodeParameter(
            "body_wa_token",
            i,
            "",
          ) as any;
          const body_active = this.getNodeParameter(
            "body_active",
            i,
            "",
          ) as any;
          const body = {
            flow_url: body_flow_url,
            flow_token: body_flow_token,
            wa_phone_number_id: body_wa_phone_number_id,
            wa_token: body_wa_token,
            active: body_active,
          };
          url = baseUrl + "/api/chatflows/url-token";
          method = "put";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "auth_postAuthLogin": {
          const body_email = this.getNodeParameter("body_email", i, "") as any;
          const body_password = this.getNodeParameter(
            "body_password",
            i,
            "",
          ) as any;
          const body = { email: body_email, password: body_password };
          url = baseUrl + "/auth/login";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "auth_deleteAuthLogout": {
          const body = undefined;
          url = baseUrl + "/auth/logout";
          method = "delete";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_Hook_getWa_hookHook": {
          const query_hub_mode = this.getNodeParameter(
            "query_hub_mode",
            i,
            "",
          ) as string;
          const query_hub_verify_token = this.getNodeParameter(
            "query_hub_verify_token",
            i,
            "",
          ) as string;
          const query_hub_challenge = this.getNodeParameter(
            "query_hub_challenge",
            i,
            "",
          ) as string;

          const body = undefined;
          url = baseUrl + "/wa-hook/hook";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
            params: {
              hub_mode: query_hub_mode,
              hub_verify_token: query_hub_verify_token,
              hub_challenge: query_hub_challenge,
            },
          };
          break;
        }

        case "WhatsApp_Hook_postWa_hookHook": {
          const body = undefined;
          url = baseUrl + "/wa-hook/hook";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "WhatsApp_Hook_getWa_hookList": {
          const query_page = this.getNodeParameter(
            "query_page",
            i,
            "",
          ) as string;
          const query_limit = this.getNodeParameter(
            "query_limit",
            i,
            "",
          ) as string;

          const body = undefined;
          url = baseUrl + "/wa-hook/list";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
            params: { page: query_page, limit: query_limit },
          };
          break;
        }

        case "WhatsApp_Hook_postWa_hookReset": {
          const body = undefined;
          url = baseUrl + "/wa-hook/reset";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        case "logs_getLogsShow": {
          const query_lines = this.getNodeParameter(
            "query_lines",
            i,
            "",
          ) as string;
          const query_level = this.getNodeParameter(
            "query_level",
            i,
            "",
          ) as string;

          const body = undefined;
          url = baseUrl + "/logs/show";
          method = "get";
          axiosConfig = {
            headers: finalHeaders,
            params: { lines: query_lines, level: query_level },
          };
          break;
        }

        case "logs_postLogsClear": {
          const body = undefined;
          url = baseUrl + "/logs/clear";
          method = "post";
          axiosConfig = {
            headers: finalHeaders,

            data: body,
          };
          break;
        }

        default:
          throw new Error("Unknown operation: " + operation);
      }

      try {
        const response = await axios({ method, url, ...axiosConfig });
        returnData.push(response.data);
      } catch (err: any) {
        returnData.push({
          error: true,
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
      }
    }

    return [this.helpers.returnJsonArray(returnData)];
  }
}

## comfyui-api文档

## GET方法

### 1、GET /history

[获取所有](https://so.csdn.net/so/search?q=获取所有&spm=1001.2101.3001.7020)历史任务数据

#### 请求参数

| 名称      | 位置  | 类型   | 必选 | 说明                                 |
| --------- | ----- | ------ | ---- | ------------------------------------ |
| prompt_id | query | string | 否   | 8b918008-751f-414c-9575-7174e841ceac |

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 2、GET /embeddings

获取一个列表

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 3、GET /history/{prompt_id}

获取历史任务数据(根据任务id获取历史数据)

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 4、GET /extensions

获取扩展节点文件列表

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 5、GET /view

图片的在线预览接口（上传图像，生图图像，蒙蔽图像，均通过该接口预览）

#### 请求参数

| 名称      | 位置  | 类型   | 必选 | 说明                                                        |
| --------- | ----- | ------ | ---- | ----------------------------------------------------------- |
| filename  | query | string | 是   | 图片名称                                                    |
| type      | query | string | 否   | 图片存放位置的文件夹（input为长传图片，output为生成的图片） |
| subfolder | query | string | 否   | 子文件夹(没有可不填)                                        |
| preview   | query | string | 否   | 预览                                                        |
| channel   | query | string | 否   | 无                                                          |

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 6、GET /system_stats

系统统计信息接口

```
{
    "system": {
        "os": "nt",
        "python_version": "3.10.9 (tags/v3.10.9:1dd9be6, Dec  6 2022, 20:01:21) [MSC v.1934 64 bit (AMD64)]",
        "embedded_python": true
    },
    "devices": [
        {
            "name": "cuda:0 NVIDIA GeForce RTX 3090 : cudaMallocAsync",
            "type": "cuda",
            "index": 0,
            "vram_total": 25769279488,
            "vram_free": 22114014558,
            "torch_vram_total": 2348810240,
            "torch_vram_free": 104404318
        }
    ]
}
```

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 7、GET /prompt

获取服务器当前剩余任务列队的数量

```
{
  "exec_info": {
    "queue_remaining": 1
  }
}
```

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 8、GET /object_info

获取系统中所有组件以及可用参数

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 9、GET /object_info/{node_class}

根据组件名称获取系统中组件参数

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 10、GET /interrupt

取消当前任务/不需任何参数

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

## POST方法

### 1、POST /upload/image

上传图片接口

```
image: string
```

#### 请求参数

| 名称    | 位置 | 类型           | 必选 | 说明                           |
| ------- | ---- | -------------- | ---- | ------------------------------ |
| body    | body | object         | 否   | none                           |
| » image | body | string(binary) | 是   | 图片将以二进制格式发送到服务器 |

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 2、POST /upload/mask

上传蒙版图片接口，一般用于局部重绘

```
image: string
type: input
subfolder: clipspace
original_ref: "{“filename”:”下载.png”,”type”:”input”,”subfolder”:”clipspace”}"
```

#### 请求参数

| 名称           | 位置 | 类型           | 必选 | 说明                           |
| -------------- | ---- | -------------- | ---- | ------------------------------ |
| body           | body | object         | 否   | none                           |
| » image        | body | string(binary) | 是   | 图片将以二进制格式发送到服务器 |
| » type         | body | string         | 否   | 上传图片的目标文件夹           |
| » subfolder    | body | string         | 否   | 上传图片的目标子文件夹         |
| » original_ref | body | string         | 是   | 无                             |

```
{
  "name": "下载.png",
  "subfolder": "clipspace",
  "type": "input"
}
```

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 3、POST /view_metadata/{folder_name}

无

#### 请求参数

| 名称        | 位置 | 类型   | 必选 | 说明 |
| ----------- | ---- | ------ | ---- | ---- |
| folder_name | path | string | 是   | none |

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 4、POST /prompt

绘图任务的下发接口，此接口只做任务下发，返回任务ID信息。
此接口只做任务下发，返回任务ID信息。

```
{
  "client_id": "533ef3a3-39c0-4e39-9ced-37d290f371f8",
  "prompt": {
    "3": {
      "inputs": {
        "seed": 764714814161513,
        "steps": 26,
        "cfg": 5,
        "sampler_name": "dpmpp_3m_sde_gpu",
        "scheduler": "karras",
        "denoise": 1,
        "model": [
          "40",
          0
        ],
        "positive": [
          "49",
          0
        ],
        "negative": [
          "6",
          0
        ],
        "latent_image": [
          "5",
          0
        ]
      },
      "class_type": "KSampler"
    },
    "5": {
      "inputs": {
        "width": 1024,
        "height": 768,
        "batch_size": 1
      },
      "class_type": "EmptyLatentImage"
    },
    "6": {
      "inputs": {
        "text": "",
        "clip": [
          "40",
          1
        ]
      },
      "class_type": "CLIPTextEncode"
    },
    "8": {
      "inputs": {
        "samples": [
          "3",
          0
        ],
        "vae": [
          "40",
          2
        ]
      },
      "class_type": "VAEDecode"
    },
    "9": {
      "inputs": {
        "filename_prefix": "ComfyUI",
        "images": [
          "8",
          0
        ]
      },
      "class_type": "SaveImage"
    },
    "13": {
      "inputs": {
        "clip_vision": [
          "39",
          0
        ],
        "image": [
          "34",
          0
        ]
      },
      "class_type": "CLIPVisionEncode"
    },
    "19": {
      "inputs": {
        "strength": 1,
        "noise_augmentation": 0,
        "conditioning": [
          "42",
          0
        ],
        "clip_vision_output": [
          "13",
          0
        ]
      },
      "class_type": "unCLIPConditioning"
    },
    "34": {
      "inputs": {
        "image": "clipspace/clipspace-mask-1645940.7000000002.png [input]",
        "choose file to upload": "image"
      },
      "class_type": "LoadImage"
    },
    "36": {
      "inputs": {
        "clip_vision": [
          "39",
          0
        ],
        "image": [
          "38",
          0
        ]
      },
      "class_type": "CLIPVisionEncode"
    },
    "37": {
      "inputs": {
        "strength": 0.75,
        "noise_augmentation": 0,
        "conditioning": [
          "19",
          0
        ],
        "clip_vision_output": [
          "36",
          0
        ]
      },
      "class_type": "unCLIPConditioning"
    },
    "38": {
      "inputs": {
        "image": "beijing1 (2).webp",
        "choose file to upload": "image"
      },
      "class_type": "LoadImage"
    },
    "39": {
      "inputs": {
        "clip_name": "clip_vision_g.safetensors"
      },
      "class_type": "CLIPVisionLoader"
    },
    "40": {
      "inputs": {
        "ckpt_name": "sd_xl_base_1.0.safetensors"
      },
      "class_type": "CheckpointLoaderSimple"
    },
    "42": {
      "inputs": {
        "conditioning": [
          "6",
          0
        ]
      },
      "class_type": "ConditioningZeroOut"
    },
    "43": {
      "inputs": {
        "safe": "enable"
      },
      "class_type": "HEDPreprocessor"
    },
    "44": {
      "inputs": {
        "safe": "enable",
        "image": [
          "34",
          0
        ]
      },
      "class_type": "HEDPreprocessor"
    },
    "45": {
      "inputs": {
        "images": [
          "44",
          0
        ]
      },
      "class_type": "PreviewImage"
    },
    "46": {
      "inputs": {
        "control_net_name": "control-lora-depth-rank256.safetensors"
      },
      "class_type": "ControlNetLoader"
    },
    "47": {
      "inputs": {
        "image": [
          "34",
          0
        ]
      },
      "class_type": "ScribblePreprocessor"
    },
    "48": {
      "inputs": {
        "images": [
          "47",
          0
        ]
      },
      "class_type": "PreviewImage"
    },
    "49": {
      "inputs": {
        "strength": 0.5,
        "conditioning": [
          "37",
          0
        ],
        "control_net": [
          "46",
          0
        ],
        "image": [
          "47",
          0
        ]
      },
      "class_type": "ControlNetApply"
    }
  }
}
```

#### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| body | body | object | 否   | none |

```
{
  "prompt_id": "352c1fc4-7382-4c4a-965f-583c4b126a1b",
  "number": 38,
  "node_errors": {}
}
```

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 5、POST /queue

删除列队/无返回信息则为成功

```
{
  "delete": "string"
}
```

#### 请求参数

| 名称     | 位置 | 类型   | 必选 | 说明             |
| -------- | ---- | ------ | ---- | ---------------- |
| body     | body | object | 否   | none             |
| » delete | body | string | 是   | 包含任务id的列表 |

#### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 
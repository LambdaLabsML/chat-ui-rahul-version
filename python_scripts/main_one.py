import requests
from openai import OpenAI

base_url = 'http://192.222.52.59:4000'

url = f"{base_url}/v1/models"
response = requests.get(url)
response_json = response.json()
# print(response_json)

# ## Metrics
# metrics_url = f"{base_url}/metrics"
# response = requests.get(metrics_url)
# print(response)
# print(response.text)
# # response_json = response.json()
# # print(response_json)

model_name = response_json['data'][0]['id']
# model_name = "rahul405B"
data = {
    "model": model_name,
    "prompt": "What is a mathematical function?",
    "max_tokens": 128,
    "temperature": 0
}
headers = {
    "Content-Type": "application/json"
}
response = requests.post(
    # "http://192.222.52.59:8000/v1/completions", 
    f"{base_url}/v1/completions",
    headers=headers, 
    json=data
)
model_json_res = response.json()
print(model_json_res)

# npm run dev -- --open dev --host
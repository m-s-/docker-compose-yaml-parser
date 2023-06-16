# Docker Compose YAML Parser

Parse and edit `docker-compose.yaml` file using easy to use methods.

---

## Usage


### Parsing

* Parsing a docker-compose.yml file
* Parsing docker compose file string
* Parsing docker compose file object


#### 🔥 Parsing a `docker-compose.yml` file

```javascript
import Parser from 'docker-compose-parser'

// create Parser instance
const compose = new Parser("./path/to/docker-compose.yml");

// Make modifications
compose.getService().getImage().setName('test').setTag('1.2.3')

// Write to file
compose.writeToFile("./output/docker-compose.yml");

```


#### 🔥 Parsing a docker compose `String`

```javascript
import Parser from 'docker-compose-parser'

// Retrieve docker compose file from somewhere
const response = fetch('https://example.com/path/to/docker-compose.yml')
const dockerComposeYaml = await response.text();

// create Parser instance from string
const compose = Parser.parse(dockerComposeYaml);
```


#### 🔥 Parsing an existing docker compose `Object`
```javascript
import Parser from 'docker-compose-parser'

// Retrieve docker compose file from somewhere
const dockerComposeObj = {
    services:
        web: {
            image: 'httpd:2.4.57',
            restart: 'unless-stopped',
            ports: [
                {
                    target: 80,
                    published: 80,
                    protocol: 'tcp'
                }
            ]
        }
}

// create Parser instance from string
const compose = Parser.parse(dockerComposeObj);
```


### Modifying

> To be added


### Saving


#### 🔥 Get the final resulting docker compose object
```javascript
// create Parser instance
const compose = new Parser("./path/to/docker-compose.yml");

// Make modifications
compose.getService().getImage().setName('test').setTag('1.2.3')

// get resulting object
console.log(compose.json())

// Output:
/*
    {
        services: {
            web: { 
                image: 'test:1.2.3',
                restart: 'unless-stopped', 
                ports: [Array] 
            }
        }
    }
*/

console.log(JSON.stringify(compose.json()))

// Output:
/*
     {"services":{"web":{"image":"test:1.2.3","restart":"unless-stopped","ports":[{"target":80,"published":80,"protocol":"tcp"}]}}}
*/

```


#### 🔥 Get the final resulting docker compose YAML string
```javascript
// create Parser instance
const compose = new Parser("./path/to/docker-compose.yml");

// Make modifications
compose.getService().getImage().setName('test').setTag('1.2.3')

// get resulting YAML string
console.log(compose.text())

// Output:
/*
    services:
        web:
            image: test:1.2.3
            restart: unless-stopped
            ports:
            - target: 80
                published: 80
                protocol: tcp
*/

```


#### 🔥 Writing to `docker-compose.yml` file
```javascript
// create Parser instance
const compose = new Parser("./path/to/docker-compose.yml");

// Make modifications
compose.getService().getImage().setName('test').setTag('1.2.3')

// Writing to file
compose.writeToFile('dist/docker-compose.yaml')

```

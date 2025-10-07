# Java REST Client - Exercise Solutions

This document provides complete solutions for all exercises in the Java REST API workshop.

## Table of Contents
- [Exercise 1: Simple GET Request](#exercise-1-simple-get-request)
- [Exercise 2: Dates Comparison](#exercise-2-dates-comparison)
- [Exercise 3: Spanish Phone Validation](#exercise-3-spanish-phone-validation)
- [Exercise 4: Spanish DNI Validation](#exercise-4-spanish-dni-validation)
- [Exercise 5: Color Name to Hexadecimal](#exercise-5-color-name-to-hexadecimal)
- [Exercise 6: Chuck Norris Jokes](#exercise-6-chuck-norris-jokes)
- [Exercise 7: URL Parsing](#exercise-7-url-parsing)
- [Exercise 8: List Files and Folders](#exercise-8-list-files-and-folders)
- [Exercise 9: Word Counting](#exercise-9-word-counting)
- [Exercise 10: Folder Zipping](#exercise-10-folder-zipping)
- [Exercise 11: Password Generator](#exercise-11-password-generator)
- [Exercise 12: Email Validation](#exercise-12-email-validation)
- [Exercise 13: JWT Token Operations](#exercise-13-jwt-token-operations)
- [Exercise 14: File Encryption/Decryption](#exercise-14-file-encryptiondecryption)
- [Exercise 15: Database CRUD Operations](#exercise-15-database-crud-operations)

---

## Exercise 1: Simple GET Request

**Implementation in `DemoController.java`:**

```java
@GetMapping("/hello")
public String hello(@RequestParam String key) {
    if ("world".equals(key)) {
        return "hello world";
    }
    return "hello";
}
```

**Unit Test:**

```java
@Test
void hello() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/hello?key=world"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.content().string("hello world"));
}

@Test
void helloWithoutKey() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/hello"))
        .andExpect(MockMvcResultMatchers.status().isBadRequest());
}
```

---

## Exercise 2: Dates Comparison

**Controller Method:**

```java
@GetMapping("/diffdates")
public Map<String, Long> diffDates(
        @RequestParam String date1,
        @RequestParam String date2) throws ParseException {
    SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
    Date firstDate = sdf.parse(date1);
    Date secondDate = sdf.parse(date2);
    
    long diffInMillies = Math.abs(secondDate.getTime() - firstDate.getTime());
    long diffInDays = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
    
    return Map.of("days", diffInDays);
}
```

**Unit Test:**

```java
@Test
void diffDates() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/diffdates?date1=01-01-2020&date2=01-01-2021"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.days").value(366));
}
```

---

## Exercise 3: Spanish Phone Validation

**Controller Method:**

```java
@GetMapping("/validatephone")
public Map<String, Boolean> validatePhone(@RequestParam String phone) {
    // Spanish phone: +34 followed by 9 digits starting with 6, 7, or 9
    String regex = "^\\+34[679]\\d{8}$";
    boolean isValid = phone.matches(regex);
    return Map.of("valid", isValid);
}
```

**Unit Test:**

```java
@Test
void validatePhoneValid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validatephone?phone=+34612345678"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(true));
}

@Test
void validatePhoneInvalid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validatephone?phone=+34512345678"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(false));
}
```

---

## Exercise 4: Spanish DNI Validation

**Controller Method:**

```java
@GetMapping("/validatedni")
public Map<String, Boolean> validateDNI(@RequestParam String dni) {
    // Spanish DNI: 8 digits followed by 1 letter
    String regex = "^\\d{8}[A-Za-z]$";
    boolean isValid = dni.matches(regex);
    return Map.of("valid", isValid);
}
```

**Unit Test:**

```java
@Test
void validateDNIValid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validatedni?dni=12345678A"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(true));
}

@Test
void validateDNIInvalid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validatedni?dni=123456"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(false));
}
```

---

## Exercise 5: Color Name to Hexadecimal

**Model Class (`Color.java`):**

```java
package com.microsoft.hackathon.copilotdemo.model;

public class Color {
    private String color;
    private String hex;

    public Color() {}

    public Color(String color, String hex) {
        this.color = color;
        this.hex = hex;
    }

    // Getters and setters
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public String getHex() { return hex; }
    public void setHex(String hex) { this.hex = hex; }
}
```

**Service Class (`ColorService.java`):**

```java
package com.microsoft.hackathon.copilotdemo.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.microsoft.hackathon.copilotdemo.model.Color;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ColorService {
    private List<Color> colors;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void loadColors() throws IOException {
        ClassPathResource resource = new ClassPathResource("colors.json");
        colors = objectMapper.readValue(
            resource.getInputStream(),
            new TypeReference<List<Color>>() {}
        );
    }

    public Optional<String> getHexByColorName(String colorName) {
        return colors.stream()
            .filter(c -> c.getColor().equalsIgnoreCase(colorName))
            .map(Color::getHex)
            .findFirst();
    }
}
```

**Controller Method:**

```java
@Autowired
private ColorService colorService;

@GetMapping("/color/{name}")
public ResponseEntity<Map<String, String>> getColorHex(@PathVariable String name) {
    return colorService.getHexByColorName(name)
        .map(hex -> ResponseEntity.ok(Map.of("color", name, "hex", hex)))
        .orElse(ResponseEntity.notFound().build());
}
```

**Unit Test:**

```java
@Test
void getColorHexFound() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/color/red"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.hex").exists());
}

@Test
void getColorHexNotFound() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/color/invalidcolor123"))
        .andExpect(MockMvcResultMatchers.status().isNotFound());
}
```

---

## Exercise 6: Chuck Norris Jokes

**Add dependency to `pom.xml`:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

**Controller Method:**

```java
@GetMapping("/joke")
public Map<String, String> getJoke() {
    WebClient webClient = WebClient.create("https://api.chucknorris.io");
    
    String joke = webClient.get()
        .uri("/jokes/random")
        .retrieve()
        .bodyToMono(String.class)
        .block();
    
    // Parse the JSON response to extract the joke
    try {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(joke);
        String jokeText = root.path("value").asText();
        return Map.of("joke", jokeText);
    } catch (Exception e) {
        return Map.of("joke", "Could not fetch joke");
    }
}
```

**Unit Test:**

```java
@Test
void getJoke() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/joke"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.joke").exists());
}
```

---

## Exercise 7: URL Parsing

**Controller Method:**

```java
@GetMapping("/parseurl")
public Map<String, Object> parseUrl(@RequestParam String url) {
    try {
        URL parsedUrl = new URL(url);
        Map<String, Object> result = new HashMap<>();
        result.put("protocol", parsedUrl.getProtocol());
        result.put("host", parsedUrl.getHost());
        result.put("port", parsedUrl.getPort() == -1 ? parsedUrl.getDefaultPort() : parsedUrl.getPort());
        result.put("path", parsedUrl.getPath());
        
        // Parse query parameters
        String query = parsedUrl.getQuery();
        Map<String, String> queryParams = new HashMap<>();
        if (query != null) {
            String[] pairs = query.split("&");
            for (String pair : pairs) {
                String[] keyValue = pair.split("=");
                if (keyValue.length == 2) {
                    queryParams.put(keyValue[0], keyValue[1]);
                }
            }
        }
        result.put("queryParameters", queryParams);
        
        return result;
    } catch (MalformedURLException e) {
        return Map.of("error", "Invalid URL: " + e.getMessage());
    }
}
```

**Unit Test:**

```java
@Test
void parseUrl() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/parseurl?url=https://example.com:8080/path?key1=value1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.protocol").value("https"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.host").value("example.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.port").value(8080))
        .andExpect(MockMvcResultMatchers.jsonPath("$.path").value("/path"));
}
```

---

## Exercise 8: List Files and Folders

**Controller Method:**

```java
@GetMapping("/listfiles")
public Map<String, Object> listFiles(@RequestParam String path) {
    File directory = new File(path);
    
    if (!directory.exists()) {
        return Map.of("error", "Path does not exist");
    }
    
    if (!directory.isDirectory()) {
        return Map.of("error", "Path is not a directory");
    }
    
    File[] files = directory.listFiles();
    List<Map<String, String>> fileList = new ArrayList<>();
    
    if (files != null) {
        for (File file : files) {
            Map<String, String> fileInfo = new HashMap<>();
            fileInfo.put("name", file.getName());
            fileInfo.put("type", file.isDirectory() ? "directory" : "file");
            fileInfo.put("path", file.getAbsolutePath());
            fileList.add(fileInfo);
        }
    }
    
    return Map.of("path", path, "items", fileList);
}
```

**Unit Test:**

```java
@Test
void listFiles() throws Exception {
    String testPath = System.getProperty("java.io.tmpdir");
    mockMvc.perform(MockMvcRequestBuilders.get("/listfiles?path=" + testPath))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.path").value(testPath))
        .andExpect(MockMvcResultMatchers.jsonPath("$.items").isArray());
}
```

---

## Exercise 9: Word Counting

**Controller Method:**

```java
@GetMapping("/wordcount")
public Map<String, Object> wordCount(
        @RequestParam String filePath,
        @RequestParam String word) {
    try {
        File file = new File(filePath);
        if (!file.exists()) {
            return Map.of("error", "File does not exist");
        }
        
        String content = new String(Files.readAllBytes(Paths.get(filePath)));
        
        // Case-insensitive word counting
        String lowerContent = content.toLowerCase();
        String lowerWord = word.toLowerCase();
        
        int count = 0;
        int index = 0;
        while ((index = lowerContent.indexOf(lowerWord, index)) != -1) {
            count++;
            index += lowerWord.length();
        }
        
        return Map.of("file", filePath, "word", word, "count", count);
    } catch (IOException e) {
        return Map.of("error", "Error reading file: " + e.getMessage());
    }
}
```

**Unit Test:**

```java
@Test
void wordCount() throws Exception {
    // Create a temporary file with known content
    File tempFile = File.createTempFile("test", ".txt");
    Files.writeString(tempFile.toPath(), "test word test word test");
    
    mockMvc.perform(MockMvcRequestBuilders.get("/wordcount?filePath=" + 
            tempFile.getAbsolutePath() + "&word=test"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.count").value(3));
    
    tempFile.delete();
}
```

---

## Exercise 10: Folder Zipping

**Controller Method:**

```java
@GetMapping("/zipfolder")
public ResponseEntity<byte[]> zipFolder(@RequestParam String folderPath) {
    try {
        File folder = new File(folderPath);
        if (!folder.exists() || !folder.isDirectory()) {
            return ResponseEntity.badRequest().build();
        }
        
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ZipOutputStream zos = new ZipOutputStream(baos);
        
        zipFile(folder, folder.getName(), zos);
        zos.close();
        
        byte[] zipBytes = baos.toByteArray();
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", folder.getName() + ".zip");
        
        return ResponseEntity.ok()
            .headers(headers)
            .body(zipBytes);
    } catch (IOException e) {
        return ResponseEntity.internalServerError().build();
    }
}

private void zipFile(File fileToZip, String fileName, ZipOutputStream zos) throws IOException {
    if (fileToZip.isHidden()) {
        return;
    }
    
    if (fileToZip.isDirectory()) {
        if (fileName.endsWith("/")) {
            zos.putNextEntry(new ZipEntry(fileName));
        } else {
            zos.putNextEntry(new ZipEntry(fileName + "/"));
        }
        zos.closeEntry();
        
        File[] children = fileToZip.listFiles();
        if (children != null) {
            for (File childFile : children) {
                zipFile(childFile, fileName + "/" + childFile.getName(), zos);
            }
        }
        return;
    }
    
    FileInputStream fis = new FileInputStream(fileToZip);
    ZipEntry zipEntry = new ZipEntry(fileName);
    zos.putNextEntry(zipEntry);
    
    byte[] bytes = new byte[1024];
    int length;
    while ((length = fis.read(bytes)) >= 0) {
        zos.write(bytes, 0, length);
    }
    fis.close();
}
```

---

## Exercise 11: Password Generator

**Controller Method:**

```java
@GetMapping("/generatepassword")
public Map<String, String> generatePassword(
        @RequestParam(defaultValue = "12") int length,
        @RequestParam(defaultValue = "true") boolean uppercase,
        @RequestParam(defaultValue = "true") boolean lowercase,
        @RequestParam(defaultValue = "true") boolean numbers,
        @RequestParam(defaultValue = "true") boolean special) {
    
    StringBuilder characterSet = new StringBuilder();
    if (uppercase) characterSet.append("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowercase) characterSet.append("abcdefghijklmnopqrstuvwxyz");
    if (numbers) characterSet.append("0123456789");
    if (special) characterSet.append("!@#$%^&*()_+-=[]{}|;:,.<>?");
    
    if (characterSet.length() == 0) {
        return Map.of("error", "At least one character type must be selected");
    }
    
    SecureRandom random = new SecureRandom();
    StringBuilder password = new StringBuilder();
    
    for (int i = 0; i < length; i++) {
        int index = random.nextInt(characterSet.length());
        password.append(characterSet.charAt(index));
    }
    
    return Map.of("password", password.toString());
}
```

**Unit Test:**

```java
@Test
void generatePassword() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/generatepassword?length=16"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.password").exists())
        .andExpect(MockMvcResultMatchers.jsonPath("$.password").value(Matchers.hasLength(16)));
}
```

---

## Exercise 12: Email Validation and Domain Extraction

**Controller Method:**

```java
@GetMapping("/validateemail")
public Map<String, Object> validateEmail(@RequestParam String email) {
    String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
    boolean isValid = email.matches(emailRegex);
    
    Map<String, Object> result = new HashMap<>();
    result.put("valid", isValid);
    
    if (isValid) {
        String domain = email.substring(email.indexOf("@") + 1);
        result.put("domain", domain);
    }
    
    return result;
}
```

**Unit Test:**

```java
@Test
void validateEmailValid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validateemail?email=test@example.com"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(true))
        .andExpect(MockMvcResultMatchers.jsonPath("$.domain").value("example.com"));
}

@Test
void validateEmailInvalid() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/validateemail?email=invalid-email"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.valid").value(false));
}
```

---

## Exercise 13: JWT Token Operations

**Add dependency to `pom.xml`:**

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
    <scope>runtime</scope>
</dependency>
```

**Service Class (`JwtService.java`):**

```java
package com.microsoft.hackathon.copilotdemo.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    
    public String generateToken(String subject, long expirationMillis) {
        return Jwts.builder()
            .setSubject(subject)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expirationMillis))
            .signWith(key)
            .compact();
    }
    
    public Map<String, Object> validateToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
            
            return Map.of(
                "valid", true,
                "subject", claims.getSubject(),
                "issuedAt", claims.getIssuedAt(),
                "expiration", claims.getExpiration()
            );
        } catch (Exception e) {
            return Map.of(
                "valid", false,
                "error", e.getMessage()
            );
        }
    }
}
```

**Controller Methods:**

```java
@Autowired
private JwtService jwtService;

@GetMapping("/jwt/generate")
public Map<String, String> generateJWT(
        @RequestParam String subject,
        @RequestParam(defaultValue = "3600000") long expirationMillis) {
    String token = jwtService.generateToken(subject, expirationMillis);
    return Map.of("token", token);
}

@GetMapping("/jwt/validate")
public Map<String, Object> validateJWT(@RequestParam String token) {
    return jwtService.validateToken(token);
}
```

---

## Exercise 14: File Encryption/Decryption

**Service Class (`EncryptionService.java`):**

```java
package com.microsoft.hackathon.copilotdemo.service;

import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Base64;

@Service
public class EncryptionService {
    
    private SecretKeySpec createKey(String password) throws Exception {
        byte[] key = password.getBytes("UTF-8");
        MessageDigest sha = MessageDigest.getInstance("SHA-256");
        key = sha.digest(key);
        key = Arrays.copyOf(key, 16);
        return new SecretKeySpec(key, "AES");
    }
    
    public String encrypt(String filePath, String password) throws Exception {
        byte[] fileContent = Files.readAllBytes(Paths.get(filePath));
        
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, createKey(password));
        
        byte[] encrypted = cipher.doFinal(fileContent);
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    public byte[] decrypt(String encryptedData, String password) throws Exception {
        byte[] encrypted = Base64.getDecoder().decode(encryptedData);
        
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.DECRYPT_MODE, createKey(password));
        
        return cipher.doFinal(encrypted);
    }
}
```

**Controller Methods:**

```java
@Autowired
private EncryptionService encryptionService;

@GetMapping("/encrypt")
public Map<String, String> encryptFile(
        @RequestParam String filePath,
        @RequestParam String password) {
    try {
        String encrypted = encryptionService.encrypt(filePath, password);
        return Map.of("encrypted", encrypted);
    } catch (Exception e) {
        return Map.of("error", e.getMessage());
    }
}

@PostMapping("/decrypt")
public ResponseEntity<byte[]> decryptData(
        @RequestParam String encryptedData,
        @RequestParam String password) {
    try {
        byte[] decrypted = encryptionService.decrypt(encryptedData, password);
        return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .body(decrypted);
    } catch (Exception e) {
        return ResponseEntity.badRequest().build();
    }
}
```

---

## Exercise 15: Database CRUD Operations

**Add dependencies to `pom.xml`:**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

**Entity Class (`User.java`):**

```java
package com.microsoft.hackathon.copilotdemo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

**Repository Interface (`UserRepository.java`):**

```java
package com.microsoft.hackathon.copilotdemo.repository;

import com.microsoft.hackathon.copilotdemo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
```

**Controller Class (`UserController.java`):**

```java
package com.microsoft.hackathon.copilotdemo.controller;

import com.microsoft.hackathon.copilotdemo.entity.User;
import com.microsoft.hackathon.copilotdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userRepository.findById(id)
            .map(user -> {
                user.setName(userDetails.getName());
                user.setEmail(userDetails.getEmail());
                return ResponseEntity.ok(userRepository.save(user));
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        return userRepository.findById(id)
            .map(user -> {
                userRepository.delete(user);
                return ResponseEntity.ok().<Void>build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
```

**Application Properties (`application.properties`):**

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

---

## Additional Exercises (16-30)

### Exercise 16: API Rate Limiting

Use Spring's `@RateLimit` or implement custom rate limiting with a filter:

```java
@Component
public class RateLimitFilter implements Filter {
    private Map<String, List<Long>> requestCounts = new ConcurrentHashMap<>();
    private static final int MAX_REQUESTS = 10;
    private static final long TIME_WINDOW = 60000; // 1 minute
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String clientId = httpRequest.getRemoteAddr();
        
        if (!isAllowed(clientId)) {
            ((HttpServletResponse) response).setStatus(429);
            response.getWriter().write("Rate limit exceeded");
            return;
        }
        
        chain.doFilter(request, response);
    }
    
    private boolean isAllowed(String clientId) {
        long currentTime = System.currentTimeMillis();
        requestCounts.putIfAbsent(clientId, new ArrayList<>());
        
        List<Long> timestamps = requestCounts.get(clientId);
        timestamps.removeIf(timestamp -> currentTime - timestamp > TIME_WINDOW);
        
        if (timestamps.size() < MAX_REQUESTS) {
            timestamps.add(currentTime);
            return true;
        }
        
        return false;
    }
}
```

### Exercise 17: Data Validation with Custom Annotations

```java
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = IbanValidator.class)
public @interface ValidIban {
    String message() default "Invalid IBAN";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

public class IbanValidator implements ConstraintValidator<ValidIban, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return false;
        // Simplified IBAN validation
        return value.matches("^[A-Z]{2}\\d{2}[A-Z0-9]{1,30}$");
    }
}
```

### Exercise 18: Caching Implementation

```java
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("colors", "jokes");
    }
}

@Service
public class ColorService {
    @Cacheable("colors")
    public Optional<String> getHexByColorName(String colorName) {
        // Implementation
    }
}
```

### Exercise 19: Error Handling and Global Exception Handler

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleException(Exception e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());
        error.put("timestamp", new Date().toString());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
    
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException e) {
        Map<String, String> error = new HashMap<>();
        error.put("error", e.getMessage());
        error.put("timestamp", new Date().toString());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
```

### Exercise 20: Async Processing

```java
@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2);
        executor.setMaxPoolSize(5);
        executor.setQueueCapacity(100);
        executor.initialize();
        return executor;
    }
}

@Service
public class AsyncService {
    @Async
    public CompletableFuture<String> processLongRunningTask(String input) {
        try {
            Thread.sleep(5000); // Simulate long operation
            return CompletableFuture.completedFuture("Processed: " + input);
        } catch (InterruptedException e) {
            return CompletableFuture.failedFuture(e);
        }
    }
}

@GetMapping("/async/process")
public CompletableFuture<Map<String, String>> asyncProcess(@RequestParam String input) {
    return asyncService.processLongRunningTask(input)
        .thenApply(result -> Map.of("result", result));
}
```

### Exercise 21: Health Check Endpoints

```java
@Component
public class CustomHealthIndicator implements HealthIndicator {
    
    @Override
    public Health health() {
        boolean systemHealthy = checkSystemHealth();
        
        if (systemHealthy) {
            return Health.up()
                .withDetail("app", "running")
                .withDetail("timestamp", new Date())
                .build();
        }
        
        return Health.down()
            .withDetail("app", "degraded")
            .withDetail("timestamp", new Date())
            .build();
    }
    
    private boolean checkSystemHealth() {
        // Check database, external services, etc.
        return true;
    }
}
```

---

## Tips for Using GitHub Copilot

1. **Start with comments**: Write clear comments describing what you want, and Copilot will suggest implementations
2. **TDD approach**: Write tests first, then let Copilot suggest implementations
3. **Use Chat**: Ask Copilot Chat to explain code, suggest improvements, or refactor
4. **Iterate**: If the first suggestion isn't perfect, refine your prompt or try again
5. **Review suggestions**: Always review and test Copilot's suggestions

---

## Running the Application

```bash
# Build the project
mvn clean package

# Run the application
mvn spring-boot:run

# Run tests
mvn test

# Access Swagger UI (if configured)
http://localhost:8080/swagger-ui.html
```

## Testing Examples

```bash
# Exercise 1
curl -v "http://localhost:8080/hello?key=world"

# Exercise 2
curl -v "http://localhost:8080/diffdates?date1=01-01-2020&date2=01-01-2021"

# Exercise 3
curl -v "http://localhost:8080/validatephone?phone=+34612345678"

# Exercise 11
curl -v "http://localhost:8080/generatepassword?length=16&uppercase=true"

# Exercise 15 - Create User
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

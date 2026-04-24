# 📘 Experiment 05: XML with DTD and XSD Validation

## 🎯 Aim
To create an XML document for a bookstore and validate it using both DTD and XSD.

---

## 📁 Folder Structure
Exp05_XML_DTD_XSD/
├── bookstore.xml
├── bookstore.dtd
└── bookstore.xsd

---

## 🧾 Description

This experiment demonstrates how XML data can be validated using:

### ✔ DTD (Document Type Definition)
- Defines structure of XML
- Specifies allowed elements and order
- Does NOT support data types

### ✔ XSD (XML Schema Definition)
- Defines structure AND data types
- Supports validation like:
  - String
  - Decimal
  - Date

---

## 📄 Files Description

### 1. bookstore.xml
- Main XML file containing bookstore data
- Contains book details like:
  - title
  - author
  - genre
  - price
  - publish date

### 2. bookstore.dtd
- Defines structure of XML
- Ensures correct element order and required attributes

### 3. bookstore.xsd
- Defines strict validation rules
- Enforces data types:
  - price → decimal
  - publish_date → date

---

## ▶ How to Run / View

### Step 1:
Open the folder in VS Code

### Step 2:
(Optional but recommended) Install extension:
XML (Red Hat)

### Step 3:
Open `bookstore.xml`

### Step 4:
View output:
- Open XML file in browser (Chrome / Edge)
- OR check validation in VS Code

---

## ✅ Expected Output

- XML loads successfully in browser
- No validation errors in VS Code
- DTD validation: Passed
- XSD validation: Passed

---

## ⚠ Note

- XML does not run like a program
- It is used for data storage and validation only
- Browser shows raw structure only (no styling)

---

## 👨‍💻 Conclusion

The XML document was successfully created and validated using both DTD and XSD. DTD ensures structural correctness, while XSD ensures both structure and data type validation.

---
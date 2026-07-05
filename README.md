# React + ASP NET Skeleton Loading + Dynamic Pagination
Simulates a real newsfeed with infinite scrolling (sometimes called `DOOMSCROLLING`).

## Preview
![Preview](preview.png)

#### Tech Stacks:
- **Vite React (Typescript)**
- **Tailwind CSS**
- **ASP.NET Core Web API**
- **SQL Server**

---

## Prerequisites
- NodeJS
- .NET Core
- SQL Server

---

### Setup inside `backend` folder:
1. Create `appsettings.Development.json` *(or `appsettings.json` for production)* file that contains:
    ```json
    {
        "Logging": {
            "LogLevel": {
                "Default": "Information",
                "Microsoft.AspNetCore": "Warning"
            }
        },
        "AllowedHosts": "*",
        "ConnectionStrings": {
            "DefaultConnection": "..."
        },
        "Cors": {
            "AllowedOrigins": [
            	"...",
            	"..."
            ]
        }
    }
    ```
    **NOTE**: *Update all the `"..."` into actual credentials*
2. Run this if you haven't installed entity framework before:
    ```cmd
    dotnet tool install --global dotnet-ef --version 8.0.0
    ```
    *NOTE: Latest version is unstable with the current setup so I use 8.0.0*
3. Run the following CMD comamnds:
    *To actually create tables in the database:*
    ```
    dotnet ef database update
    ```
4. Run `dotnet watch run` to run your backend.

### Setup inside `frontend` folder:
1.  Create an `.env` file that contains:
    ```env
    VITE_API_URL=http://localhost:5163
    ```
    **NOTE**: *Change `VITE_API_URL` into the actual backend host without trailing slash.*
2. Run `npm install` to install necessary packages.
3. Run `npm run dev` to test your development frontend.

---

## Backend Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `project-name.csproj`.
This section is provided for reference only, to give you insight into how the project was set up.

## Backend Dependencies:
*(Note: Some dependencies are intentionally using old versions for stable releases)*
- `dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0`
- `dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0`
- `dotnet add package Microsoft.EntityFrameworkCore.Tools --version 8.0.0`
    
## Frontend Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json` (both frontend and backend).
This section is provided for reference only, to give you insight into how the project was set up.

## Frontend Dependencies
- `npm install tailwindcss @tailwindcss/vite axios`

## Frontend Configuration
- Update `vite.config.ts`:
  ```ts
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```
#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ProjectSoftwareASP/ProjectSoftwareASP.csproj", "ProjectSoftwareASP/"]
RUN dotnet restore "ProjectSoftwareASP/ProjectSoftwareASP.csproj"
COPY . .
WORKDIR "/src/ProjectSoftwareASP"
RUN dotnet build "ProjectSoftwareASP.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProjectSoftwareASP.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProjectSoftwareASP.dll"]
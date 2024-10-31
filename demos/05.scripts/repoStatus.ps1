# Define variables
$orgName = "TT-PSC-S-A-Partner-Demo"

# Function to get repository status using GitHub CLI
function Get-RepoStatus {
    param (
        [string]$repoName
    )
    $repoStatus = gh repo view "$orgName/$repoName"
    Write-Output $repoStatus
    return $repoStatus
}

# Get all repositories in the organization
$repos = gh repo list $orgName --limit 1000 --json name --jq '.[].name'

# Loop through each repository and get its status
foreach ($repo in $repos) {
    Write-Output "-----------------------------"
    Write-Output "Getting status for repository: $repo"
    $repoStatus = Get-RepoStatus -repoName $repo
    Write-Output "Repository: $($repoStatus)"
    Write-Output "-----------------------------"
    # Write repository status to CSV file
    $csvLine = "$($repoStatus.name),$($repoStatus.visibility),$($repoStatus.default_branch),$($repoStatus.pushed_at)"
    Add-Content -Path "statuses.csv" -Value $csvLine
}
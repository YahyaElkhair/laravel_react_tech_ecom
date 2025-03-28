<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class HandleFilesController extends Controller
{
    public static function uploadFiles($files, $files_content_type)
    {
        $stored_paths_array = [];
        $stored_path = null;

        switch ($files_content_type) {
            case 'product':
                $store_path = "Products";
                if(count($files) > 1){
                    foreach ($files as $file) {
                        $stored_paths_array = array_merge($stored_paths_array, [$file->store($store_path, 'public')] );
                    }
                    return $stored_paths_array;
                }else{
                    $stored_path = $files[0]->store($store_path, 'public');
                    return $stored_path;
                }
            default:
                return [];
        }
    }

    


    // public function downloadFiles($filePath)
    // {
    //     // Make sure the file exists in the public disk
    //     if (Storage::disk('public')->exists($filePath)) {
    //         // Return the file as a download response
    //         return Storage::disk('public')->download($filePath);
    //     }
    
    //     // Return a 404 response if the file doesn't exist
    //     return back()->with('error', 'File not found!');
    // }
    
}

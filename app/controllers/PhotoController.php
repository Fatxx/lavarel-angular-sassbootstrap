<?php

class PhotoController extends \BaseController {

    public function __construct()
    {
      $this->beforeFilter('serviceAuth', array('on' => array('store', 'destroy', 'update')));
    }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

	public function index()
	{
        return Response::json(Photo::all());
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	/*public function create()
	{

	}*/


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */

	public function store()
	{

        $post = array (
            'name' => 'required',
            'category' => 'required',
            'url' => 'required',
            'product_month' => 'required',
            'slideshow' => 'required'
        );

        $validar = Validator::make(Input::all(), $post);

        if ($validar->fails())
        {
            echo json_encode(array("success" => false));

            $messages = $validar->messages();

            foreach ($messages->all() as $message)
            {
                echo json_encode(array(
                    'success'   => false,
                    'description' => $message
                    )
                );
            }
        }
        else
        {
            $photo = new Photo;

            $photo->user_id = Auth::user()->id;
            $photo->name = Request::get('name');
            $photo->category = Request::get('category');
            $photo->url = Request::get('url');
            $photo->product_month = Request::get('product_month');
            $photo->slideshow = Request::get('slideshow');

            $photo->save();

            return Response::json(array('success' => true));
        }

	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        if (Photo::find($id) == null) {

            return Response::json(array('success' => false));

        }

        return Response::json(array(
            'success' => true,
            'photo' => Photo::find($id)
            )
        );
    }

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	/*public function edit($id)
	{
		//
	}*/


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        if ($id == null)
        {
            return Response::json(array('success' => false));
        }
        else
        {
            $post = array (
                'name' => 'required',
                'category' => 'required',
                'url' => 'required',
                'product_month' => 'required',
                'slideshow' => 'required'
            );

            $validar = Validator::make(Input::all(), $post);

            if ($validar->fails())
            {
                $messages = $validar->messages();

                foreach ($messages->all() as $message)
                {
                    echo json_encode(array(
                        "success" => false,
                        "description" => $message
                        )
                    );
                }
            }
            else
            {
                $photo = Photo::find($id);

                $photo->user_id = Auth::user()->id;
                $photo->name = Request::get('name');
                $photo->category = Request::get('category');
                $photo->url = Request::get('url');
                $photo->product_month = Request::get('product_month');
                $photo->slideshow = Request::get('slideshow');

                $photo->save();

                return Response::json(array('success' => true));
            }
        }
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        if (Photo::destroy($id) == null)
        {
            return Response::json(array("success" => false));
        }

        return Response::json(array("success" => true));
	}
}

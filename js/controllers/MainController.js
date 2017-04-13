app.controller('ctrl', ['$scope', function($scope){
	$scope.judul='Belajar Angular JS NDRO';
	$scope.ket ='Daftar mahasiswa';
	$scope.mahasiswa={
		nama : 'Indro',
		jurusan : 'Sistem Informasi',
		angkatan : new Date('2015','05','01'),
		
		
	};
}]);
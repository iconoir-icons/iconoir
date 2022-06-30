import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Movie extends StatelessWidget {
  const Movie({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Movie.svg');
}

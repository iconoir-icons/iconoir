import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FavouriteBook extends StatelessWidget {
  const FavouriteBook({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FavouriteBook.svg');
}

import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SearchFont extends StatelessWidget {
  const SearchFont({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SearchFont.svg');
}

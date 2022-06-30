import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SearchEngine extends StatelessWidget {
  const SearchEngine({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SearchEngine.svg');
}

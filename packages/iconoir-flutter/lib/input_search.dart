import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InputSearch extends StatelessWidget {
  const InputSearch({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/InputSearch.svg');
}

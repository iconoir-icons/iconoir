import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DocSearch extends StatelessWidget {
  const DocSearch({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DocSearch.svg');
}
